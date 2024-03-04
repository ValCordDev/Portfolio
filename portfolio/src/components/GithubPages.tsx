import React, { useState, useEffect } from 'react';
import { fetchRepositories } from '@/pages/api/githubApi';
import { Repository } from '@/pages/api/types';

const GithubPages = () => {
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const repositories = await fetchRepositories('ValCordDev'); // replace 'username' with the desired GitHub username
        setRepos(repositories);
      };
      fetchData();
    }, []);

    function formatDate(dateString: string | number | Date) {
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      const event = new Date(dateString);
      let formattedDate = event.toLocaleDateString('en-US', options);
  
      // Adding the suffix for the day
      const day = event.getDate();
      let suffix = 'th';
      if (day === 1 || day === 21 || day === 31) {
        suffix = 'st';
      } else if (day === 2 || day === 22) {
        suffix = 'nd';
      } else if (day === 3 || day === 23) {
        suffix = 'rd';
      }
  
      return formattedDate.replace(/(\d+)(st|nd|rd|th)/, `$1${suffix}`);
  }
  
      
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="w-screen">
        <h1 className="text-5xl font-bold">Github Repositories</h1>
        <p className="py-6 mb-10">Here are some of my public Github repositories. You can find more of my repositories on my Github profile.</p>
        <div className='grid grid-cols-3 gap-10'>
        {repos.map((repo) => (
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center items-center">
                    <h2 className="card-title text-center">{repo.name}</h2>
                    <p>Last updated: {formatDate(repo.updated_at)}</p>
                    <p>Created: {formatDate(repo.created_at)}</p>
                    <div className="card-actions justify-end">
                    <a href={repo.html_url} className="btn btn-primary">Github Link</a>
                    </div>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  </div>
  )
}

export default GithubPages;