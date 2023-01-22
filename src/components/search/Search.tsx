import { useContext, useState } from 'react';
import { DataContextType } from '../../interfaces';
import './Search.scss';
import { TextField, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DataTable from '../dataTable/DataTable';
import Pagination from '../pagination/Pagination';
import { DataContext } from '../../contexts/dataContext';

const Search = () => {
  const { globalData, updateGlobalData } = useContext(
    DataContext
  ) as DataContextType;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const onClick = (e: any) => {
    // if no input, return
    if (!name) {
      window.alert('Please Fill The ORG Name');
      return;
    }

    setLoading(true);
    
    let sortBy = '',
      sortDirection = '';
    if (e.currentTarget.id === 'sort-asc') {
      sortBy = 'full_name';
      sortDirection = 'asc';
    } else if (e.currentTarget.id === 'sort-desc') {
      sortBy = 'full_name';
      sortDirection = 'desc';
    }

    fetch(
      `https://api.github.com/orgs/${name}/repos?sort=${sortBy}&direction=${sortDirection}&per_page=100&page=1}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        updateGlobalData(jsonResponse);
        setLoading(false);
      });
  };

  // pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsOnCurrentPage = globalData.length
    ? globalData.slice(indexOfFirstItem, indexOfLastItem)
    : globalData;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const changeItemsPerPage = (items: number) => {
    setItemsPerPage(items);
  };

  return (
    <div className="search">
      <div className="search-header">
        <SearchOutlinedIcon />
        <span>Search Repositories Across Orgs</span>
      </div>
      <div className="search-bar">
        <TextField
          id="outlined-basic"
          size="small"
          fullWidth
          variant="outlined"
          placeholder="Enter github org name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button id="submit" variant="outlined" onClick={onClick}>
          Submit
        </Button>
      </div>
      <div className="response">
        {JSON.stringify(globalData) === JSON.stringify([]) ? null : loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <DataTable data={itemsOnCurrentPage} onSort={onClick} />
            <Pagination
              itemsPerPage={itemsPerPage}
              changeItemsPerPage={changeItemsPerPage}
              totalItems={globalData.length}
              paginate={paginate}
              firstIdx={indexOfFirstItem}
              lastIdx={indexOfLastItem}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
