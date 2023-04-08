import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRef = document.querySelector('#root');

export const Modal = ({ largeImage, type, onClose }) => {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  return createPortal(
    <div onClick={onClose} className="Overlay">
      <div className="Modal">
        <img src={largeImage} alt={type} />
      </div>
    </div>,
    modalRef
  );
};
