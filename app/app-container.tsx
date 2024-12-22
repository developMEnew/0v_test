'use client'

import { useState } from 'react'
import { Home, Eye, Settings, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import StatsCard from './stats-card'
import ListView from './views/list-view'
import AddClip from './views/add-clip'
import CalendarView from './views/calendar-view'
import { TopNavbar } from './components/top-navbar'
import { Sidebar } from './components/sidebar'

export default function AppContainer() {
  const [activeTab, setActiveTab] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login clicked')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="pt-16 pb-20">
        {activeTab === 'home' && <StatsCard />}
        {activeTab === 'view' && <ListView />}
        {activeTab === 'manage' && <AddClip />}
        {activeTab === 'calendar' && <CalendarView />}
      </div>

      {/* Google Login Button */}
      <div className="fixed bottom-20 right-4">
        <Button
          onClick={handleGoogleLogin}
          className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg transform-gpu rotate-x-1"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
          Login with Google
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-between items-center p-4">
          <button 
            onClick={() => setActiveTab('home')}
            className={`p-2 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Home className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('view')}
            className={`p-2 ${activeTab === 'view' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Eye className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('manage')}
            className={`p-2 ${activeTab === 'manage' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Settings className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('calendar')}
            className={`p-2 ${activeTab === 'calendar' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Calendar className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

