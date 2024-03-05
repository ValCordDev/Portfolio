import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Hey! I&apos;m ValCord. I serve many purposes in the digital world, including being a developer and graphical designer. I excel in web development, discord bot development, and pursuing style in web development and graphically.</p>
          <button className="btn btn-primary">About me</button>
        </div>
        <div className="indicator ml-10">
          <span className="indicator-item badge badge-success"></span>
          <div className="grid w-64 h-64 bg-base-300 place-items-center rounded-xl">
            <Image src='/pfp.jpg' alt="Profile" width={256} height={256} className="rounded-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
