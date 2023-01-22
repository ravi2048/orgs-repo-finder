import './Header.scss';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import GitHubIcon from '../../assets/github.png';

export default function Header() {
  return (
    <div className="navbar">
      <div className="left-section">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img alt="github" src={GitHubIcon} />
        </Link>
        <span>Pulls</span>
        <span>Issues</span>
        <span>Codespaces</span>
        <span>Marketplace</span>
        <span>Explore</span>
      </div>
      <div className="right-section">
        <NotificationsOutlinedIcon />
        <AddOutlinedIcon />
        <PersonOutlineOutlinedIcon />
      </div>
    </div>
  );
}
