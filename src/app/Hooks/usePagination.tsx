import { useState } from "react";

export function usePagination(channels: any[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedChannels = channels.slice(startIndex, endIndex);

  const totalPages = Math.ceil(channels.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(channels.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    displayedChannels,
    totalPages,
    nextPage,
    prevPage,
  };
}
