import React, { useEffect, useRef } from "react";
import useModalOutSideClick from "../../../hooks/useModalOutSideClick";
import ModalContainerPortal from "../../../portal/ModalContainerPortal";

export default function Modal({
  onCloseModal,
  custom,
  bgType,
  position,
  styles,
  children,
}) {
  const modalRef = useRef(null);

  const handleClose = () => {
    if (onCloseModal === undefined || onCloseModal === null) return;
    onCloseModal();
  };

  useModalOutSideClick(modalRef, handleClose);

  useEffect(() => {
    document.body.style.cssText = `
    position: sticky;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    return () => {
      const top = document.body.style.top;
      const scrollY = parseInt(top || "0", 10) * -1;
      document.body.style.cssText = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const positionStyle =
    position === "top" ? "modal-wrapper-top" : "modal-wrapper-middle";

  return (
    <ModalContainerPortal>
      <div className={`modal-overlay ${!bgType && "bg-transparent"}`}>
        <div
          className={`${position && positionStyle} ${
            styles && styles
          } modal-shadow`}
        >
          <div className="modal-inner" ref={modalRef}>
            {!custom && <div className="modal-content">{children}</div>}
            {custom && <div>{children}</div>}
          </div>
        </div>
      </div>
    </ModalContainerPortal>
  );
}
