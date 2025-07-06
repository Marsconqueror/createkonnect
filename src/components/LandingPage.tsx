import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingPageProps {
  onUserTypeSelect: (type: 'creator' | 'company') => void;
}

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <main className="flex flex-col items-center w-full px-4 py-16">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Unlock Your Brand's <span className="text-blue-600">Potential.</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Whether you're a business looking to amplify your message or a creator ready to collaborate, Creatorkonnect is your gateway to impactful partnerships.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* For Advertisers */}
            <div className="bg-gray-50 rounded-xl p-6 flex-1 shadow flex flex-col items-center">
              <div className="font-semibold mb-2">For Advertisers</div>
              <div className="text-gray-500 text-center text-base mb-4">
                Find the perfect influencers to showcase your products and services. Drive engagement and reach new audiences.
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-full transition"
                onClick={() => navigate('/company')}
              >
                Start as Advertiser
              </button>
            </div>
            {/* For Creators */}
            <div className="bg-gray-50 rounded-xl p-6 flex-1 shadow flex flex-col items-center">
              <div className="font-semibold mb-2">For Creators</div>
              <div className="text-gray-500 text-center text-base mb-4">
                Partner with exciting brands, monetize your influence, and grow your community through meaningful collaborations.
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-full transition"
                onClick={() => navigate('/creator')}
              >
                Start as Creator
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;