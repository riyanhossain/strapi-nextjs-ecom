import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComp({
  total,
  currentPage,
  setCurrentPage,
}: {
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const handleNext = () => {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrev} />
        </PaginationItem>
        {
          // Add ellipsis here if currentPage is not the last page
          currentPage > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }
        {
          // Add the first page if currentPage is not the first page
          currentPage > 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )
        }
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        {
          // Add the last page if currentPage is not the last page
          currentPage < total && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )
        }
        {
          // Add ellipsis here if currentPage is not the last page
          currentPage < total - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
