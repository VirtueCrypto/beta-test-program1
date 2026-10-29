'use client';

import React, { useState } from 'react';
import { Users, Target, ShieldAlert, CheckCircle2, Sliders, Layers, BarChart3, Rocket } from 'lucide-react';

export default function BetaDashboard() {
  const [scope, setScope] = useState<'Standard' | 'Ecosystem'>('Standard');
  const [demographic, setDemographic] = useState<'Developers' | 'Consumer Retail'>('Developers');
  const [activeTab, setActiveTab] = useState<'overview' | 'matrix' | 'feedback'>('overview');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-1">
            <Rocket className="w-4 h-4" /> Program Release Management
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Beta Testing Command Center</h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-xl">
          <span className="text-xs text-slate-400 uppercase font-semibold px-2">Environment:</span>
          <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-lg border border-indigo-500/20 font-medium">
            Staging / Preview
          </span>
        </div>
      </header>

      {/* Configuration Control Panel */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-slate-300 font-semibold mb-4">
            <Sliders className="w-5 h-5 text-indigo-400" /> Project Scope Selector
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Standard', 'Ecosystem'].map((s) => (
              <button
                key={s}
                onClick={() => setScope(s as any)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  scope === s
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {s} Release
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-slate-300 font-semibold mb-4">
            <Users className="w-5 h-5 text-indigo-400" /> Target Demographic Cohort
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Developers', 'Consumer Retail'].map((d) => (
              <button
                key={d}
                onClick={() => setDemographic(d as any)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  demographic === d
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-slate-800 mb-8">
        {[
          { id: 'overview', label: 'Program Overview', icon: BarChart3 },
          { id: 'matrix', label: 'Demographic & Scope Matrix', icon: Layers },
          { id: 'feedback', label: 'Bug Triage & Telemetry', icon: ShieldAlert },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-1">Active Testers Enrolled</div>
            <div className="text-3xl font-bold text-slate-100 mb-2">
              {scope === 'Standard' ? '250 / 300' : '1,250 / 1,500'}
            </div>
            <div className="text-emerald-400 text-xs flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> 83% Onboarding Completion Rate
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-1">Target Persona Focus</div>
            <div className="text-2xl font-bold text-slate-100 mb-2">{demographic}</div>
            <div className="text-indigo-400 text-xs font-medium">
              {demographic === 'Developers' ? 'SDK Integration & API Stress Testing' : 'UX Flows & Latency Tracking'}
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="text-slate-400 text-sm font-medium mb-1">Critical Open Issues</div>
            <div className="text-3xl font-bold text-amber-400 mb-2">3</div>
            <div className="text-slate-400 text-xs">SLA Resolution window: &lt; 24h</div>
          </div>
        </div>
      )}

      {activeTab === 'matrix' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" /> Configuration Matrix Specification
          </h3>
          <div className="space-y-4 text-slate-300 text-sm">
            <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">Selected Scope:</span> {scope} Release profile configured for{' '}
              {scope === 'Standard' ? 'closed iterative milestone testing.' : 'wide-scale production simulation.'}
            </div>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">Target Audience Profile:</span> Optimizing feedback collection loops specifically for{' '}
              {demographic.toLowerCase()} use-cases, concentrating telemetry logging on critical error boundaries.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Active Bug Triage & Telemetry Pipeline</h3>
          <div className="space-y-3">
            {[
              { id: 'ISSUE-101', title: 'Wallet connection timeout on secondary network handshake', severity: 'High', status: 'In Progress' },
              { id: 'ISSUE-102', title: 'Responsive grid distortion on mobile viewport breakpoints', severity: 'Medium', status: 'Triaged' },
              { id: 'ISSUE-103', title: 'Analytics event payload missing campaign tracking tag', severity: 'Low', status: 'Resolved' },
            ].map((bug) => (
              <div key={bug.id} className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs font-mono text-indigo-400 mr-2">{bug.id}</span>
                  <span className="font-medium text-slate-200">{bug.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    bug.severity === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {bug.severity}
                  </span>
                  <span className="text-xs text-slate-400">{bug.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}