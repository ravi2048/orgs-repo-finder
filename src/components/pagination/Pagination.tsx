import React from 'react';
import './Pagination.scss';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

interface Props {
  itemsPerPage: number;
  changeItemsPerPage: any;
  totalItems: number;
  paginate: any;
  firstIdx: number;
  lastIdx: number;
  currentPage: number;
}
const Pagination: React.FC<Props> = ({
  itemsPerPage,
  changeItemsPerPage,
  totalItems,
  paginate,
  firstIdx,
  lastIdx,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handleChange = (e: any) => {
    changeItemsPerPage(e.target.value);
    paginate(1);
  };

  return (
    <nav className="pagination-container">
      <div className="items-per-page-control">
        <span>Items Per Page</span>
        <select value={itemsPerPage} onChange={(e) => handleChange(e)}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="pagination-control">
        <span>
          {firstIdx + 1}-{lastIdx} of {totalItems}
        </span>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          <KeyboardArrowLeftOutlinedIcon />
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          <KeyboardArrowRightOutlinedIcon />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
