import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  TrendingUp, 
  DollarSign,
  Heart,
  MessageSquare,
  Eye,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Clock,
  Award
} from 'lucide-react';

interface MarketplaceProps {
  userType: 'creator' | 'company' | null;
}

const Marketplace = ({ userType }: MarketplaceProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const creators = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      niche: 'Lifestyle & Fashion',
      followers: '125K',
      engagement: '4.2%',
      rating: 4.9,
      reviews: 47,
      priceRange: '$1,500 - $3,000',
      location: 'Los Angeles, CA',
      featured: true,
      platforms: ['instagram', 'youtube', 'twitter'],
      recentWork: 'Fashion Week Coverage, Beauty Brand Collaborations'
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'MC',
      niche: 'Technology & Gaming',
      followers: '89K',
      engagement: '6.8%',
      rating: 4.8,
      reviews: 32,
      priceRange: '$1,200 - $2,500',
      location: 'San Francisco, CA',
      featured: false,
      platforms: ['youtube', 'twitter'],
      recentWork: 'Tech Product Reviews, Gaming Tutorials'
    },
    {
      id: 3,
      name: 'Emma Davis',
      avatar: 'ED',
      niche: 'Health & Fitness',
      followers: '156K',
      engagement: '5.1%',
      rating: 4.9,
      reviews: 61,
      priceRange: '$2,000 - $4,000',
      location: 'Miami, FL',
      featured: true,
      platforms: ['instagram', 'youtube'],
      recentWork: 'Fitness App Promotions, Wellness Brand Partnerships'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      avatar: 'AR',
      niche: 'Travel & Adventure',
      followers: '203K',
      engagement: '3.8%',
      rating: 4.7,
      reviews: 38,
      priceRange: '$2,500 - $5,000',
      location: 'Austin, TX',
      featured: false,
      platforms: ['instagram', 'youtube', 'twitter'],
      recentWork: 'Destination Marketing, Travel Gear Reviews'
    },
    {
      id: 5,
      name: 'Jessica Park',
      avatar: 'JP',
      niche: 'Food & Cooking',
      followers: '78K',
      engagement: '7.2%',
      rating: 4.8,
      reviews: 29,
      priceRange: '$1,000 - $2,000',
      location: 'New York, NY',
      featured: true,
      platforms: ['instagram', 'youtube'],
      recentWork: 'Restaurant Partnerships, Cooking Equipment Reviews'
    },
    {
      id: 6,
      name: 'David Kim',
      avatar: 'DK',
      niche: 'Business & Finance',
      followers: '95K',
      engagement: '4.5%',
      rating: 4.9,
      reviews: 42,
      priceRange: '$1,800 - $3,500',
      location: 'Chicago, IL',
      featured: false,
      platforms: ['youtube', 'twitter'],
      recentWork: 'Financial Product Reviews, Business Consulting'
    }
  ];

  const campaigns = [
    {
      id: 1,
      title: 'Summer Fashion Collection Launch',
      company: 'StyleCorp',
      budget: '$15,000 - $25,000',
      category: 'Fashion',
      duration: '3 months',
      requirements: 'Fashion influencers with 100K+ followers',
      posted: '2 days ago',
      applicants: 23,
      urgent: true
    },
    {
      id: 2,
      title: 'Tech Product Review Campaign',
      company: 'TechBrand Inc.',
      budget: '$8,000 - $12,000',
      category: 'Technology',
      duration: '1 month',
      requirements: 'Tech reviewers with strong engagement',
      posted: '5 days ago',
      applicants: 15,
      urgent: false
    },
    {
      id: 3,
      title: 'Fitness App Promotion',
      company: 'FitLife Solutions',
      budget: '$20,000 - $35,000',
      category: 'Health & Fitness',
      duration: '6 months',
      requirements: 'Health & fitness influencers',
      posted: '1 week ago',
      applicants: 41,
      urgent: false
    }
  ];

  const categories = ['all', 'Fashion', 'Technology', 'Health & Fitness', 'Travel', 'Food', 'Business'];
  const priceRanges = ['all', '$0-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'youtube': return <Youtube className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-6 font-sans">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 font-sans">
              {userType === 'creator' ? 'Find Your Next Opportunity' : 'Discover Perfect Creators'}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-sans">
              {userType === 'creator' 
                ? 'Browse exciting collaboration opportunities from top brands'
                : 'Connect with talented creators who match your brand vision'
              }
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                placeholder={userType === 'creator' ? 'Search campaigns...' : 'Search creators...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent font-sans bg-white shadow"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent font-sans bg-white shadow"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent font-sans bg-white shadow"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>
                    {range === 'all' ? 'All Budgets' : range}
                  </option>
                ))}
              </select>
              <button className="flex items-center space-x-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-white/80 transition-colors">
                <Filter className="w-5 h-5" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content based on user type */}
        {userType === 'creator' ? (
          /* Campaign Listings for Creators */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Available Campaigns</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{campaigns.length} opportunities found</span>
              </div>
            </div>
            
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                        {campaign.urgent && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{campaign.company}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{campaign.budget}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{campaign.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{campaign.applicants} applicants</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {campaign.category}
                      </span>
                      <p className="text-sm text-gray-500">{campaign.posted}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{campaign.requirements}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-6 py-2 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Creator Listings for Companies */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Featured Creators</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{creators.length} creators found</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creators.map((creator) => (
                <div key={creator.id} className={`bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  creator.featured ? 'border-purple-200 ring-1 ring-purple-100' : 'border-gray-200'
                }`}>
                  {creator.featured && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Featured Creator</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {creator.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{creator.name}</h3>
                      <p className="text-gray-600">{creator.niche}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{creator.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Followers</p>
                      <p className="font-semibold text-gray-900">{creator.followers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Engagement</p>
                      <p className="font-semibold text-gray-900">{creator.engagement}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{creator.rating}</span>
                      <span className="text-sm text-gray-500">({creator.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {creator.platforms.map((platform, index) => (
                        <div key={index} className="p-1 bg-gray-100 rounded text-gray-600">
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{creator.recentWork}</p>
                  <p className="font-semibold text-gray-900 mb-4">{creator.priceRange}</p>

                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-white/80 transition-colors">
                      View Profile
                    </button>
                    <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Contact
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">
            {userType === 'creator' ? 'Ready to Grow Your Brand?' : 'Ready to Launch Your Campaign?'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {userType === 'creator' 
              ? 'Join thousands of creators already earning through our platform'
              : 'Connect with top-tier influencers and amplify your reach'
            }
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/80 transition-colors">
            {userType === 'creator' ? 'Complete Your Profile' : 'Post Your First Campaign'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;