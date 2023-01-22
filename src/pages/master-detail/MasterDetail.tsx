import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from '../../components/header/Header';
import { DataContext } from '../../contexts/dataContext';
import './MasterDetail.scss';

export default function MasterDetail() {
  const { id } = useParams();
  const { globalData } = useContext(DataContext);
  const responseArr = globalData.filter((item) => item.id.toString() === id);
  const response = responseArr[0];

  return (
    <div className="master-detail">
      <Header />
      <div className="details">
        <div className="back-button">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small">
              Go Back
            </Button>
          </Link>
        </div>
        <h2>More details of the repo:</h2>
        {response ? (
          <ul>
            <li>
              <b>Id</b>: {response.id}
            </li>
            <li>
              <b>Node Id</b>: {response.node_id}
            </li>
            <li>
              <b>Name</b>: {response.name}
            </li>
            <li>
              <b>Full Name</b>: {response.full_name}
            </li>
            <li>
              <b>Owner</b>: {response.owner.avatar_url}
            </li>
            <li>
              <b>Description</b>: {response.description}
            </li>
            <li>
              <b>URL</b>: {response.url}
            </li>
            <li>
              <b>Watchers Count</b>: {response.watchers_count}
            </li>
            <li>
              <b>Forks Count</b>: {response.forks_count}
            </li>
            <li>
              <b>Open Issues Count</b>: {response.open_issues_count}
            </li>
            <li>
              <b>Default Branch</b>: {response.default_branch}
            </li>
          </ul>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}
