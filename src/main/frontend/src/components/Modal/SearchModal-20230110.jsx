import React, { useEffect } from "react";
import { useState } from "react";
import Search from "../Search/Search";
import SearchList from "../Search/SearchList";
import Modal from "../Shared/Modal/Modal";
import useSearch from "../../hooks/useSearch";
import ErrorImage from "../../assets/imgs/error/error1.png";

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
      <Search setKeyword={setKeyword} helpVisible={keyword ? true : false} />
      {keyword && dataList && (
        <SearchList onCloseModal={onCloseModal} dataList={dataList} />
      )}
    </Modal>
  );
}
