import React from 'react'
import TitanExpress from './TitanExpress'
import InvestorUka from './InvestorUka'

const FeaturedProjects = () => {
  return (
    <div>
        <div className="flex justify-center bg-base-200 pb-24 pt-60">
            <div className="flex flex-col justify-center items-center align-middle text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                    Projects
                    </h1> 
                    <p className="mb-5 text-neutral-200">
                    I do have a lot of projects i have worked on in the past. Here are some of the major ones.
                    </p> 
                </div>
                <TitanExpress />
                <InvestorUka />
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects