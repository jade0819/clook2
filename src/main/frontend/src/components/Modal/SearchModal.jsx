import React from "react";
import Modal from "../Shared/Modal/Modal";
import SearchContainer from "../Search/SearchContainer";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ApiError from "../Shared/Error/ApiError";

export default function SearchModal({ onCloseModal, bgType, position }) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Modal onCloseModal={onCloseModal} bgType={bgType} position={position}>
      <ErrorBoundary onReset={reset} FallbackComponent={ApiError}>
        <SearchContainer onCloseModal={onCloseModal} />
      </ErrorBoundary>
    </Modal>
  );
}
