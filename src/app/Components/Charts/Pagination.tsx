import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import "./styles.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
}) => (
  <div className="pagination">
    <div
      className="page-number"
      onClick={prevPage}
      style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
    >
      <FaAnglesLeft />
    </div>
    <div
      className="page-numbers"
      onClick={prevPage}
      style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
    >
      Previous
    </div>
    <div className="page-numbers">{currentPage}</div>
    <div className="page-numbers">of</div>
    <div className="page-numbers">{totalPages}</div>
    <div
      className="page-numbers"
      onClick={nextPage}
      style={{
        cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
      }}
    >
      Next
    </div>
    <div
      className="page-number"
      onClick={nextPage}
      style={{
        cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
      }}
    >
      <FaAnglesRight />
    </div>
  </div>
);
