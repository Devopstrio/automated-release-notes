import React from 'react';

// Devopstrio Automated Release Notes
// Delivery Workspace & Publishing Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-rose-500/30">
            {/* Enterprise Header */}
            <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                        </div>
                        <h1 className="text-lg font-bold text-slate-800 tracking-tight">Delivery Communications</h1>
                    </div>
                    <nav className="flex gap-6 text-sm font-semibold">
                        <a href="#" className="text-rose-600 border-b-2 border-rose-600 pb-5 pt-5">Dashboard</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">Drafts & Approvals</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">Audience Analytics</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">Templates</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-8 py-8">

                {/* Executive KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Releases Notes Published', value: '412', trend: '+12% this month', color: 'rose' },
                        { title: 'Automated AI Drafts', value: '100%', trend: 'Zero manual entry', color: 'orange' },
                        { title: 'Email Open Rate', value: '68.4%', trend: 'Highly Engaged', color: 'emerald' },
                        { title: 'Slack Link Clicks', value: '3,402', trend: 'Last 30 Days', color: 'blue' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{kpi.title}</h4>
                            <div className={`text-4xl font-black text-slate-800 mt-2`}>{kpi.value}</div>
                            <p className={`text-xs text-${kpi.color}-500 font-bold mt-2 bg-${kpi.color}-50 inline-block px-2 py-0.5 rounded`}>{kpi.trend}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                    {/* Imminent / Recent Releases Pipeline */}
                    <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-800">Deployment Pipeline</h2>
                            <button className="text-sm text-rose-600 font-semibold hover:text-rose-700">View Calendar &rarr;</button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* In Draft State */}
                            <div className="border border-amber-200 bg-amber-50/50 p-5 rounded-lg flex items-start gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-800 flex items-center gap-2">Core Payment Service <span className="font-mono text-xs bg-white border border-slate-200 px-2 py-0.5 rounded text-amber-700">v3.1.0</span></h3>
                                            <p className="text-sm text-slate-600 mt-1">AI synthesis complete. Awaiting Product Manager approval.</p>
                                        </div>
                                        <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded shadow transition-colors">Review Draft</button>
                                    </div>
                                </div>
                            </div>

                            {/* Approved State - Ready to Publish */}
                            <div className="border border-indigo-200 bg-indigo-50/50 p-5 rounded-lg flex items-start gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-800 flex items-center gap-2">iOS Mobile Application <span className="font-mono text-xs bg-white border border-slate-200 px-2 py-0.5 rounded text-indigo-700">v4.0.0</span></h3>
                                            <p className="text-sm text-slate-600 mt-1">Approved by Legal & UX. Ready for multi-channel broadcast.</p>

                                            <div className="flex gap-2 mt-3">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 rounded">Slack #general</span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 rounded">Customer Email</span>
                                            </div>
                                        </div>
                                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded shadow transition-colors flex items-center gap-2">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                            Publish Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operational Integrations Sidebar */}
                    <div className="flex flex-col gap-6">

                        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 shadow-inner">
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Active Connectors</h2>

                            <ul className="space-y-4">
                                <li className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>GitHub PR Sync
                                    </div>
                                    <span className="text-xs text-slate-400">Syncing...</span>
                                </li>
                                <li className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>Jira Epic Linker
                                    </div>
                                    <span className="text-xs text-slate-400">Live</span>
                                </li>
                                <li className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>SendGrid Matrix
                                    </div>
                                    <span className="text-xs text-slate-400">Live</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 rounded-xl p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 relative z-10">AI Tone Adaption</h2>
                            <p className="text-xs text-slate-300 mb-4 relative z-10">The LLM successfully stripped internal jargon from 42 PRs today, transforming cryptographic commit hashes into professional English.</p>
                            <button className="w-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold py-2 rounded shadow transition-colors relative z-10">
                                Tune System Prompts
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
