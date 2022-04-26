import { Button } from "./Button";
import { Link } from "./Link";

type PaginationProps = {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  count: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
  count,
}) => {
  return (
    <div className="p-4">
      <div>
        <small>
          Page {currentPage} of {pages} | {count} registers
        </small>
      </div>
      <div className="flex items-center space-x-1">
        {Array.from(Array(pages), (item, index) => (
          <Link
            label={String(index + 1)}
            click={() => setCurrentPage(Number(index + 1))}
            key={item}
          />
        ))}
      </div>
    </div>
  );
};
