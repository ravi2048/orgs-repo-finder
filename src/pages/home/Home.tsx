import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <Search />
      </div>
    </div>
  );
}
