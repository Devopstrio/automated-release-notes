-- Devopstrio Automated Release Notes
-- Platform Metadata & Workflow Schema
-- Target: PostgreSQL 14+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Organizational Mapping
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Editor', -- Admin, ProductManager, Editor
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Core Entity: A specific software release (e.g., API Gateway v2.4.1)
CREATE TABLE IF NOT EXISTS releases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    service_name VARCHAR(255) NOT NULL,
    version_tag VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Draft', -- Draft, PendingApproval, Published, Failed
    is_public BOOLEAN DEFAULT false,
    author_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Raw ingested data linked to the Release
CREATE TABLE IF NOT EXISTS release_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
    scms_id VARCHAR(255), -- GitHub PR ID
    ticket_id VARCHAR(255), -- Jira Ticket ID
    category VARCHAR(50) NOT NULL, -- Feature, Bugfix, Breaking, Chore
    raw_title TEXT NOT NULL,
    raw_description TEXT,
    ai_generated_prose TEXT, -- The translated user-friendly string
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Workflow Tracking
CREATE TABLE IF NOT EXISTS approvals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
    approver_id UUID REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'Pending', -- Pending, Approved, Rejected
    comments TEXT,
    reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Multichannel Publisher Jobs
CREATE TABLE IF NOT EXISTS publish_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
    channel_type VARCHAR(50) NOT NULL, -- Slack, Email, Portal, Confluence
    target_endpoint VARCHAR(255), -- Custom webhook or Channel ID
    status VARCHAR(50) DEFAULT 'Queued', -- Queued, Success, Failed
    error_log TEXT,
    executed_at TIMESTAMP WITH TIME ZONE
);

-- Engagement Metrics
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL, -- Email_Opened, Slack_Click, Portal_View
    user_hash VARCHAR(255), -- Anonymized tracker
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Fast Lookups
CREATE INDEX idx_release_service ON releases(service_name, version_tag);
CREATE INDEX idx_publish_status ON publish_jobs(status);
CREATE INDEX idx_analytics_release ON analytics_events(release_id);
