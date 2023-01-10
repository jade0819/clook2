import React, { useEffect } from "react";
import { useState } from "react";
import Search from "../Search/Search";
import SearchList from "../Search/SearchList";
import Modal from "../Shared/Modal/Modal";
import useSearch from "../../hooks/useSearch";

export default function SearchModal({ onCloseModal }) {
  const [keyword, setKeyword] = useState("");
  const { searchQuery } = useSearch(keyword);
  const { isError, refetch, data: dataList } = searchQuery;

  useEffect(() => {
    if (!keyword) return;
    refetch();
  }, [keyword]);

  return (
    <Modal onCloseModal={onCloseModal}>
      <Search setKeyword={setKeyword} />
      {!isError && keyword && (
        <SearchList onCloseModal={onCloseModal} dataList={dataList} />
      )}
    </Modal>
  );
}
