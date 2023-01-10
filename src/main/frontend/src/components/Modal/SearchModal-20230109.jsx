import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../Shared/Modal/Modal";
import useSearch from "../../hooks/useSearch";
import SearchContainer from "../Search/SearchContainer";
import { ErrorBoundary } from "react-error-boundary";
import ApiError from "../Shared/Error/ApiError";

export default function SearchModal({ onCloseModal, bgType, position }) {
  const [keyword, setKeyword] = useState("");
  const { searchQuery } = useSearch(keyword);
  const { isError, refetch, data: dataList } = searchQuery;

  useEffect(() => {
    if (!keyword) return;
    refetch();
  }, [keyword]);

  return (
    <Modal onCloseModal={onCloseModal} bgType={bgType} position={position}>
      <ErrorBoundary FallbackComponent={ApiError}>
        <SearchContainer onCloseModal={onCloseModal} />
      </ErrorBoundary>
    </Modal>
  );
}
