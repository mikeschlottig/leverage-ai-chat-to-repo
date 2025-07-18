import React, { useState } from 'react'
import { FileText, GitBranch, Settings, Rocket, Upload, Download, Code, FolderOpen } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('extract')

  const tabs = [
    { id: 'extract', name: 'Extract', icon: FileText },
    { id: 'structure', name: 'Structure', icon: GitBranch },
    { id: 'configure', name: 'Configure', icon: Settings },
    { id: 'deploy', name: 'Deploy', icon: Rocket }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'extract':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-leverage-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extract Chat Content</h3>
              <p className="text-gray-600 mb-6">Upload your Claude conversation to extract and parse the content</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-leverage-blue transition-colors">
              <div className="space-y-4">
                <FileText className="mx-auto h-8 w-8 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Drop your chat file here or</p>
                  <button className="text-leverage-blue hover:text-leverage-purple font-medium">
                    click to browse
                  </button>
                </div>
                <p className="text-xs text-gray-500">Supports .txt, .md, .json files</p>
              </div>
            </div>
          </div>
        )
      
      case 'structure':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <GitBranch className="mx-auto h-12 w-12 text-leverage-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structure Repository</h3>
              <p className="text-gray-600 mb-6">Organize extracted content into a proper repository structure</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Detected Project Type</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <Code className="h-6 w-6 text-leverage-blue mb-2" />
                  <p className="font-medium">Frontend Project</p>
                  <p className="text-sm text-gray-600">React + Vite</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <FolderOpen className="h-6 w-6 text-leverage-purple mb-2" />
                  <p className="font-medium">Documentation</p>
                  <p className="text-sm text-gray-600">README + Guides</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'configure':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Settings className="mx-auto h-12 w-12 text-leverage-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure Repository</h3>
              <p className="text-gray-600 mb-6">Set up repository settings and metadata</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repository Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leverage-blue"
                  placeholder="my-awesome-project"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leverage-blue"
                  rows={3}
                  placeholder="A brief description of your project..."
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-leverage-blue" />
                  <span className="ml-2 text-sm text-gray-700">Private Repository</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-leverage-blue" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Initialize with README</span>
                </label>
              </div>
            </div>
          </div>
        )
      
      case 'deploy':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Rocket className="mx-auto h-12 w-12 text-leverage-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy to GitHub</h3>
              <p className="text-gray-600 mb-6">Create the repository and push your organized content</p>
            </div>
            
            <div className="bg-gradient-to-r from-leverage-blue to-leverage-purple rounded-lg p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6" />
                <span className="font-medium">Ready to Deploy</span>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Your chat content has been structured and is ready to be deployed as a GitHub repository.
              </p>
              <button className="bg-white text-leverage-blue px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Create Repository
              </button>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-leverage-blue to-leverage-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LEVERAGE AI</h1>
                <p className="text-xs text-gray-500">Chat to Repo Exporter</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-leverage-blue text-leverage-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {renderTabContent()}
        </div>
      </main>
    </div>
  )
}

export default App