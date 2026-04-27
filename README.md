<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="85" alt="Devopstrio Logo" />

<h1>Automated Release Notes Platform</h1>

<p><strong>Intelligent Change Synthesis, Broadcast Automation, and Executive Delivery Visibility</strong></p>

[![AI](https://img.shields.io/badge/AI-Summarization_LLM-522c72?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![CI/CD](https://img.shields.io/badge/Integrations-GitHub_&_Jira-0078d4?style=for-the-badge&logo=github&labelColor=000000)](/connectors)
[![Comms](https://img.shields.io/badge/Channels-Slack_&_Teams-962964?style=for-the-badge&labelColor=000000)](/apps/publisher-engine)
[![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)

</div>

---

## 🏛️ Executive Summary

The **Automated Release Notes (ARN)** platform replaces the tedious, error-prone manual labor of compiling changelogs. By hooking directly into GitHub Pull Requests, Jira Tickets, and Kubernetes deployments, ARN automatically synthesizes dense technical diffs into polished, boardroom-ready announcements. 

Utilizing an integrated AI Subsystem, it detects Breaking Changes, identifies Feature categorizations, and broadcasts multi-channel updates targeting both internal Engineers (via Slack) and external Customers (via Email / Public Portal).

### Strategic Business Outcomes
- **Zero-Touch Publishing**: Deployments to Production trigger Webhooks that automatically generate and broadcast Release Notes within minutes of stabilization.
- **AI Tone Adaptation**: Automatically translates cryptic commit messages (`fix: null ref in payment handler`) into empathetic, customer-facing prose (`Resolved an issue preventing successful checkout experiences`).
- **Omnichannel Distribution**: A single release payload is dynamically adapted into Markdown for GitHub Releases, HTML for Email/Confluence, and BlockKit JSON for Slack channels.
- **Audit Defensibility**: Automatically binds the Release Note document to the exact Git SHA, Jira Epics, and Azure Pipeline Run IDs for SOC2 change-management compliance.

---

## 🏗️ Technical Architecture Details

### 1. High-Level Architecture
```mermaid
graph TD
    Sources[GitHub / Jira / CI] --> Collect[Collector Engine]
    Collect --> AI[AI Summarizer]
    AI --> Template[Template Engine]
    Template --> Approve[Approval Queue]
    Approve --> Publish[Publisher Engine]
    Publish --> Slack[Slack / Teams]
    Publish --> Email[SendGrid / M365]
    Publish --> Portal[Next.js Public Changelog]
```

### 2. Change Data Collection Workflow
```mermaid
sequenceDiagram
    participant GitHub
    participant Jira
    participant Collector
    participant DB
    
    GitHub->>Collector: Webhook (tag: v1.1.0 pushed)
    Collector->>GitHub: Compare v1.1.0 with v1.0.0
    Collector->>Jira: Fetch Epic metadata via ticket tags
    Collector->>DB: Store raw unified change payloads
```

### 3. Release Note Generation Lifecycle
```mermaid
graph LR
    Raw[Raw Commit Data] --> Filter[Drop CI/CD commits]
    Filter --> Classify[Label: Fix, Feature, Breaking]
    Classify --> LLM[AI Context Expansion]
    LLM --> Markdown[Generate Standard Output]
```

### 4. Approval Workflow
```mermaid
graph TD
    Draft[Draft Ready] --> Rules[Check Scope]
    Rules -->|Internal Only| Approve1[Engineering Lead]
    Rules -->|Customer Facing| Approve2[Product Manger + Legal]
    Approve1 --> Lock[Version Locked]
    Approve2 --> Lock
```

### 5. Multi-Channel Publish Flow
```mermaid
graph TD
    Payload[Approved Note] --> Format[Format Engine]
    Format --> SlackFormat[BlockKit JSON]
    Format --> EmailFormat[HTML Template]
    Format --> GitFormat[Markdown File]
    SlackFormat --> SlackBridge[Slack API]
    EmailFormat --> SMTP[SendGrid API]
```

### 6. Engagement Analytics Flow
```mermaid
graph LR
    User[End User] -->|Clicks Email Link| API[Analytics API]
    User -->|Views Next.js Portal| API
    API --> Aggregator[Traffic Aggregator]
    Aggregator --> Executive[Dashboards]
```

### 7. Security Trust Boundary
```mermaid
graph TD
    Internet --> WAF[Cloudflare AppSec]
    WAF --> AKS[Cluster Environment]
    AKS --> |Private Link| GPT[Azure OpenAI / LLM]
    AKS --> |Managed Identity| Vault[Azure Key Vault]
```

### 8. AKS Topology
```mermaid
graph TD
    subgraph Kubernetes
        Ingress --> React[Portal Pods]
        Ingress --> FastAPI[Platform API]
        FastAPI --> Celery[Async Workers]
        Celery --> PG[(PostgreSQL)]
        Celery --> Redis[(Task Queue)]
    end
```

### 9. AI Content Generation Model
```mermaid
graph TD
    Input[PR Description + Commit Diff] --> Sanitize[Remove Secrets/PII]
    Sanitize --> Prompt[Inject Persona Prompting]
    Prompt --> Inference[LLM Execution]
    Inference --> Output[Human Readable JSON Block]
```

### 10. Translation Workflow
```mermaid
graph LR
    English[Base English Note] --> Engine[Translation Engine]
    Engine --> ES[Spanish Variant]
    Engine --> FR[French Variant]
    Engine --> DE[German Variant]
```

---

## 🛠️ Global Platform Components

| Engine | Directory | Purpose |
|:---|:---|:---|
| **Release Portal**| `apps/portal/` | The Next.js Public Changelog and internal Dashboard. |
| **Collector API** | `apps/collector-engine/`| Webhook listeners aggregating state from external dev tools. |
| **AI Summarizer** | `ai/` | Handles the linguistic transformation from tech to business speak. |
| **Publisher** | `apps/publisher-engine/`| Dispatches the final payloads into Slack, Teams, and standard email. |

---

## 🚀 Environment Deployment

Deploy the infrastructure.

```bash
cd terraform/environments/prod
terraform init
terraform apply -auto-approve
```

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering Empathic Communication.</sub>
