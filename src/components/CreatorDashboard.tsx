import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Star,
  Plus,
  Edit,
  ExternalLink,
  BarChart3,
  Award,
  MessageSquare
} from 'lucide-react';

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const socialMediaAccounts = [
    { platform: 'Instagram', handle: '@creatorhandle', followers: '125K', engagement: '4.2%', icon: <Instagram className="w-5 h-5" /> },
    { platform: 'YouTube', handle: 'CreatorChannel', followers: '89K', engagement: '6.8%', icon: <Youtube className="w-5 h-5" /> },
    { platform: 'Twitter', handle: '@creator', followers: '45K', engagement: '3.1%', icon: <Twitter className="w-5 h-5" /> },
  ];

  const recentDeals = [
    { company: 'TechBrand Co.', campaign: 'Product Launch', status: 'Active', amount: '$2,500', progress: 75 },
    { company: 'Fashion House', campaign: 'Summer Collection', status: 'Completed', amount: '$1,800', progress: 100 },
    { company: 'Fitness App', campaign: 'App Promotion', status: 'Negotiation', amount: '$3,200', progress: 25 },
  ];

  const portfolioItems = [
    { title: 'Tech Review Campaign', client: 'TechBrand Co.', views: '2.1M', engagement: '5.4%', date: '2024-01-15' },
    { title: 'Fashion Collaboration', client: 'StyleCorp', views: '890K', engagement: '7.2%', date: '2024-01-10' },
    { title: 'Lifestyle Content', client: 'LifestyleBrand', views: '650K', engagement: '4.8%', date: '2024-01-05' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
                <p className="text-lg text-gray-600">Lifestyle & Tech Creator</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">127 completed projects</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
              <button
                className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition shadow"
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
              <button
                className="bg-gray-200 text-blue-600 rounded-lg px-4 py-2 font-semibold hover:bg-blue-100 transition shadow"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Followers', value: '259K', change: '+12%', icon: <Users className="w-6 h-6" />, color: 'blue' },
            { title: 'Avg. Engagement', value: '5.2%', change: '+0.8%', icon: <TrendingUp className="w-6 h-6" />, color: 'blue' },
            { title: 'Total Earnings', value: '$24,500', change: '+18%', icon: <DollarSign className="w-6 h-6" />, color: 'emerald' },
            { title: 'Active Deals', value: '8', change: '+3', icon: <BarChart3 className="w-6 h-6" />, color: 'orange' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8 py-4">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'social', label: 'Social Media' },
                { id: 'deals', label: 'Active Deals' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'analytics', label: 'Analytics' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-6 rounded-xl hover:from-purple-100 hover:to-blue-100 transition-all duration-300 text-left">
                      <Plus className="w-8 h-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">Create New Portfolio</h4>
                      <p className="text-sm text-gray-600">Showcase your latest work</p>
                    </button>
                    <button className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 text-left">
                      <MessageSquare className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">Browse Opportunities</h4>
                      <p className="text-sm text-gray-600">Find new collaboration deals</p>
                    </button>
                    <button className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 p-6 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 text-left">
                      <Award className="w-8 h-8 text-orange-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">Update Skills</h4>
                      <p className="text-sm text-gray-600">Add new capabilities</p>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'New collaboration request from TechBrand Co.', time: '2 hours ago', type: 'request' },
                      { action: 'Portfolio view from Fashion House', time: '4 hours ago', type: 'view' },
                      { action: 'Payment received for Summer Campaign', time: '1 day ago', type: 'payment' },
                      { action: 'Profile updated with new skills', time: '2 days ago', type: 'update' },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'request' ? 'bg-purple-500' :
                          activity.type === 'view' ? 'bg-blue-500' :
                          activity.type === 'payment' ? 'bg-emerald-500' : 'bg-gray-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Social Media Tab */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Connected Accounts</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Account</span>
                  </button>
                </div>
                <div className="grid gap-6">
                  {socialMediaAccounts.map((account, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            {account.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{account.platform}</h4>
                            <p className="text-gray-600">{account.handle}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-6">
                            <div>
                              <p className="text-sm text-gray-500">Followers</p>
                              <p className="text-lg font-semibold text-gray-900">{account.followers}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Engagement</p>
                              <p className="text-lg font-semibold text-gray-900">{account.engagement}</p>
                            </div>
                            <button className="text-purple-600 hover:text-purple-700">
                              <ExternalLink className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deals Tab */}
            {activeTab === 'deals' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Active Collaborations</h3>
                <div className="space-y-4">
                  {recentDeals.map((deal, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{deal.campaign}</h4>
                          <p className="text-gray-600">{deal.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{deal.amount}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            deal.status === 'Active' ? 'bg-green-100 text-green-800' :
                            deal.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {deal.status}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${deal.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{deal.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Portfolio Showcase</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500"></div>
                      <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{item.client}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{item.views} views</span>
                          <span className="font-medium text-purple-600">{item.engagement} engagement</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Performance Analytics</h3>
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Detailed analytics coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">Track your performance across all platforms</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;