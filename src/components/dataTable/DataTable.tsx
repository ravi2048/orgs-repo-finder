import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IResponse } from '../../interfaces/index';
import './DataTable.scss';
import { Link } from 'react-router-dom';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const createData = (
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  owner: {
    avatar_url: string;
    html_url: string;
  }
) => {
  return { id, node_id, name, full_name, owner };
};

interface Props {
  data: IResponse[];
  onSort: any;
}

const DataTable: React.FC<Props> = ({ data, onSort }) => {
  if (!data[0]) {
    return <p>{JSON.stringify(data)}</p>;
  }

  const rows: IResponse[] = [];
  data?.forEach((repo) => {
    rows.push(
      createData(repo.id, repo.node_id, repo.name, repo.full_name, repo.owner)
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left" sx={{ display: 'flex', gap: '3px' }}>
              Name
              <ArrowUpwardOutlinedIcon
                sx={{ cursor: 'pointer', fontSize: 'small' }}
                id="sort-asc"
                onClick={onSort}
              />
              <ArrowDownwardOutlinedIcon
                sx={{ cursor: 'pointer', fontSize: 'small' }}
                id="sort-desc"
                onClick={onSort}
              />
            </TableCell>
            <TableCell align="left">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <Link to={`/details/${row.id}`}>{row.id}</Link>
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">
                <a href={row.owner.html_url}>
                  <img alt="avatar" src={row.owner.avatar_url} />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
