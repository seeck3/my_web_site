import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  makeStyles,
  Theme,
  withStyles,
  createStyles,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Paper,
  Link,
} from '@material-ui/core';
import request from 'request';
import github from '../../config/default.json';
import { GitHubProps } from '../type';
// Components
import TableTitle from './TableTitle';
import TablePaginationAction from './TablePaginationAction';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: '16px',
    },
  })
)(TableCell);

const GitHub = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [repos, setRepos] = useState<GitHubProps[]>([]);
  const [perPage, setPerPage] = useState(10);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  useEffect(() => {
    getRepos(perPage);
  }, [perPage]);
  const getRepos = (num: number) => {
    const options = {
      uri: `https://api.github.com/users/${github.username}/repos?sort=pushed:asc&client_id=${github.githubClientId}&client_secret=${github.githubSecret}`,
      // uri: `https://api.github.com/users/${github.username}/repos?per_page=${num}&sort=pushed:asc&client_id=${github.githubClientId}&client_secret=${github.githubSecret}`,
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
      console.log('REPOS', JSON.parse(body));
    });
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, repos.length - page * rowsPerPage);

  return repos.length > 0 ? (
    <React.Fragment>
      <TableTitle />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='custom pagination table'>
          <TableHead>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Go to GitHub</StyledTableCell>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? repos.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : repos
            ).map((repo) => (
              <TableRow key={repo.name}>
                <TableCell component='th' scope='row'>
                  {repo.name}
                </TableCell>
                <TableCell>{repo.description || 'No Description'}</TableCell>
                <TableCell>
                  {
                    <Link href={repo.html_url} target='_blank'>
                      {repo.html_url}
                    </Link>
                  }
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 15, { label: 'All', value: -1 }]}
                colSpan={3}
                count={repos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationAction}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </React.Fragment>
  ) : null;
};

GitHub.propTypes = {};

export default GitHub;
