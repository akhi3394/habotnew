import React from 'react';

const VideoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-20 rounded bg-blue-900 text-white py-14 px-6 lg:px-20">
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <div className="relative">
          <img 
            src='data:image/jpeg;base64,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'
            alt="Video Thumbnail" 
            className="w-96 h-auto rounded-md"
          />
          <a 
            href="https://www.youtube.com/" 
            className="absolute inset-0 flex justify-center items-center"
          >
            <svg 
              className="w-16 h-16 text-red-600" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21.6 12L3 1.2v21.6L21.6 12zM0 0v24L24 12 0 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="flex justify-around">
          <div className="text-xl font-semibold mb-4 text-orange-400 underline">Buyer</div>
          <div className="text-xl font-semibold mb-4 text-white">Supplier</div>
        </div>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Post your requirements.
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Sit back for multiple suppliers to contact you.
          </li>
          <li className="flex items-center mb-2">
            <span className="text-green-400 mr-2">✔️</span> Choose among the suppliers based on the ratings and reviews.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;
