import React, { useState } from 'react';
import { TfiAnnouncement } from "react-icons/tfi";

const AnnouncementBanner = () => {
  // State to manage visibility of the announcement banner
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the banner
  const hideBanner = () => {
    setIsVisible(false);
  };

  // If the banner is not visible, don't render it
  if (!isVisible) {
    return null;
  }

  return (
    <div className="mt-20 fixed z-10 flex w-screen justify-center">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8 bg-neutral-900 rounded-3xl shadow-2xl">
            <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
                <div className="flex-none p-1.5 px-4 rounded-full bg-teMainDark flex items-center justify-center font-medium text-sm">
                    <TfiAnnouncement className="w-6 h-6" />
                </div>
                <p className="font-medium p-2">
                    Keep in mind that this website is still under development. Bugs are expected to be found, and the website may not be fully functional.
                </p>
            </div>
            <button className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring" onClick={hideBanner}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
            </button>
        </div>
    </div>
  );
};

export default AnnouncementBanner;
