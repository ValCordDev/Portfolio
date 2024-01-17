import React from 'react'

const projects = [
    {
        name: 'Titan Express',
        type: 'Virtual Truck Company',
        description: 'Titan Express is a virtual truck company that operates on the TruckersMP platform. We have been in operation since 2023 and have become a relatively large community.',
        image: 'https://cdn.discordapp.com/attachments/1100832550420750347/1142810622296346624/Profilebanner.png',
        link: 'https://titanvtc.com',
        roles: ['Management', 'Graphics Design', 'Website Development'],
    },
]

const FeaturedProjects = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                    Projects
                    </h1> 
                    <p className="mb-5">
                    I do have a lot of projects i have worked on in the past. Here are some of the major ones.
                    </p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects