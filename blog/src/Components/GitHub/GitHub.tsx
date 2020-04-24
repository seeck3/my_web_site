import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, Typography, Box, Button } from '@material-ui/core';
import request from 'request';
import config from 'config';
import github from '../../config/default.json';
import { GitHubProps } from '../type';

const GitHub = () => {
  const [repos, setRepos] = useState<GitHubProps[]>([]);
  const [perPage, setPerPage] = useState(5);
  useEffect(() => {
    getRepos(perPage);
  }, [perPage]);
  const getRepos = (num: number) => {
    const options = {
      uri: `https://api.github.com/users/${github.username}/repos?per_page=${num}&sort=pushed:asc&client_id=${github.githubClientId}&client_secret=${github.githubSecret}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };

    request(options, (error, response, body) => {
      if (error) return [];

      if (response.statusCode !== 200) {
        return [];
      }
      const repos = JSON.parse(body);
      setRepos(repos);
      console.log('body', JSON.parse(body));
    });
  };

  const getMoreRepos = () => {
    // getRepos(perPage + 5);
    setPerPage(perPage + 5);
  };
  return repos.length > 0 ? (
    <React.Fragment>
      {repos.map((repo) => (
        <div key={repo.id} className='repo bg-white p-1 my-1'>
          <div>
            <h4>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li className='badge badge-primary'>
                Stars: {repo.stargazers_count}
              </li>
              <li className='badge badge-dark'>
                Watchers: {repo.watchers_count}
              </li>
              <li className='badge badge-light'>Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
      <div>
        <Button variant='outlined' onClick={getMoreRepos}>
          more..
        </Button>
      </div>
    </React.Fragment>
  ) : null;
};

GitHub.propTypes = {};

export default GitHub;
