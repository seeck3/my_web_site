import React, { useEffect } from 'react';
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
import { connect } from 'react-redux';
import { getRepos } from '../../Redux/Actions/github';
import { GitHubProps } from '../type';
// Components
import TablePaginationAction from './TablePaginationAction';

type Props = {
  getRepos: any;
  repos: GitHubProps[];
};

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

const TableBodyContainer = ({ getRepos, repos }: Props) => {
  console.log('repos', repos);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    getRepos();
  }, []);

  if (repos.length > 0) {
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
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, repos.length - page * rowsPerPage);

    return (
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
            ).map((repo: any) => (
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
    );
  }
  return null;
};

TableBodyContainer.propTypes = {};

const mapStateToProps = (state: any) => ({
  repos: state.github.repos,
});

export default connect(mapStateToProps, { getRepos })(TableBodyContainer);
