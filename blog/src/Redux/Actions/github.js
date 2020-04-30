import axios from 'axios';

import request from 'request';
import github from '../../config/default.json';

import { GET_GITHUB } from '../types';

// get github repos
export const getRepos = () => async (dispatch) => {
  const options = {
    uri: `https://api.github.com/users/${github.username}/repos?sort=pushed:asc&client_id=${github.githubClientId}&client_secret=${github.githubSecret}`,
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
  };

  request(options, (error, response, body) => {
    if (error) return [];

    if (response.statusCode !== 200) {
      return [];
    }
    const repos = JSON.parse(body);
    try {
      dispatch({
        type: GET_GITHUB,
        payload: repos,
      });
    } catch (error) {
      console.log('error is ', error);
    }
  });
};
