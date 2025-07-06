import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Star,
  Plus,
  Filter,
  Eye,
  MessageSquare,
  BarChart3,
  Award,
  Target
} from 'lucide-react';

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const activeCampaigns = [
    { 
      name: 'Summer Product Launch', 
      creators: 12, 
      budget: '$45,000', 
      reach: '2.3M', 
      status: 'Active',
      progress: 68 
    },
    { 
      name: 'Brand Awareness Drive', 
      creators: 8, 
      budget: '$28,000', 
      reach: '1.8M', 
      status: 'Planning',
      progress: 25 
    },
    { 
      name: 'Holiday Campaign', 
      creators: 15, 
      budget: '$62,000', 
      reach: '3.1M', 
      status: 'Completed',
      progress: 100 
    },
  ];

  const topCreators = [
    { 
      name: 'Sarah Johnson', 
      niche: 'Lifestyle', 
      followers: '125K', 
      engagement: '4.2%', 
      rating: 4.9,
      price: '$2,500',
      avatar: 'SJ'
    },
    { 
      name: 'Mike Chen', 
      niche: 'Tech', 
      followers: '89K', 
      engagement: '6.8%', 
      rating: 4.8,
      price: '$1,800',
      avatar: 'MC'
    },
    { 
      name: 'Emma Davis', 
      niche: 'Fashion', 
      followers: '156K', 
      engagement: '5.1%', 
      rating: 4.9,
      price: '$3,200',
      avatar: 'ED'
    },
  ];

  const recentProposals = [
    { creator: 'Alex Rivera', campaign: 'Q1 Product Launch', status: 'Pending', amount: '$3,500', date: '2024-01-20' },
    { creator: 'Jessica Park', campaign: 'Brand Partnership', status: 'Accepted', amount: '$2,800', date: '2024-01-18' },
    { creator: 'David Kim', campaign: 'Event Coverage', status: 'Negotiating', amount: '$4,200', date: '2024-01-15' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-6 font-sans">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                TC
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 font-sans">Creatorkonnect</h1>
                <p className="text-lg text-gray-700 font-sans">Technology & Innovation</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">87 successful campaigns</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow font-sans">
              <Plus className="w-4 h-4" />
              <span>New Campaign</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Active Campaigns', value: '12', change: '+3', icon: <Target className="w-6 h-6" />, color: 'blue' },
            { title: 'Total Reach', value: '5.2M', change: '+28%', icon: <TrendingUp className="w-6 h-6" />, color: 'blue' },
            { title: 'Campaign Budget', value: '$135K', change: '+15%', icon: <DollarSign className="w-6 h-6" />, color: 'emerald' },
            { title: 'Partner Creators', value: '45', change: '+8', icon: <Users className="w-6 h-6" />, color: 'orange' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 font-sans">{stat.value}</h3>
              <p className="text-gray-700 text-sm font-sans">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow">
          <div className="border-b border-gray-200 bg-white">
            <nav className="flex space-x-8 px-8 py-4">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'campaigns', label: 'Campaigns' },
                { id: 'creators', label: 'Top Creators' },
                { id: 'proposals', label: 'Proposals' },
                { id: 'analytics', label: 'Analytics' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors font-sans ${
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
                    <button className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-6 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 text-left">
                      <Plus className="w-8 h-8 text-blue-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">Create Campaign</h4>
                      <p className="text-sm text-gray-600">Launch new influencer campaign</p>
                    </button>
                    <button className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 text-left">
                      <Search className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">Find Creators</h4>
                      <p className="text-sm text-gray-600">Discover perfect influencers</p>
                    </button>
                    <button className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 p-6 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 text-left">
                      <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">View Analytics</h4>
                      <p className="text-sm text-gray-600">Track campaign performance</p>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'New proposal submitted by Sarah Johnson', time: '1 hour ago', type: 'proposal' },
                      { action: 'Campaign "Summer Launch" reached 1M impressions', time: '3 hours ago', type: 'milestone' },
                      { action: 'Payment processed for Mike Chen collaboration', time: '1 day ago', type: 'payment' },
                      { action: 'New creator Emma Davis joined your network', time: '2 days ago', type: 'network' },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'proposal' ? 'bg-blue-500' :
                          activity.type === 'milestone' ? 'bg-purple-500' :
                          activity.type === 'payment' ? 'bg-emerald-500' : 'bg-orange-500'
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

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Active Campaigns</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>New Campaign</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {activeCampaigns.map((campaign, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{campaign.name}</h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>{campaign.creators} creators</span>
                            <span>•</span>
                            <span>{campaign.reach} reach</span>
                            <span>•</span>
                            <span>{campaign.budget} budget</span>
                          </div>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">{campaign.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Creators Tab */}
            {activeTab === 'creators' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Recommended Creators</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Browse All
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topCreators.map((creator, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {creator.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{creator.name}</h4>
                          <p className="text-sm text-gray-600">{creator.niche}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{creator.rating}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500">Followers</p>
                          <p className="font-semibold">{creator.followers}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Engagement</p>
                          <p className="font-semibold">{creator.engagement}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">{creator.price}</span>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Proposals Tab */}
            {activeTab === 'proposals' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Proposals</h3>
                <div className="space-y-4">
                  {recentProposals.map((proposal, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {proposal.creator.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{proposal.creator}</h4>
                            <p className="text-gray-600">{proposal.campaign}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{proposal.amount}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            proposal.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                            proposal.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {proposal.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-gray-500">{proposal.date}</p>
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 font-medium">
                            View Details
                          </button>
                          <button className="text-purple-600 hover:text-purple-700 font-medium">
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Campaign Analytics</h3>
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Comprehensive analytics dashboard coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">Track ROI, engagement, and campaign performance</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;