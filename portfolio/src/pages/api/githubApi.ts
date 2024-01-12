// githubApi.ts
import axios from 'axios';
import { Repository } from './types';

export const fetchRepositories = async (username: string): Promise<Repository[]> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
