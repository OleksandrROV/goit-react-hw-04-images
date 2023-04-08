import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, type },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <li onClick={handlToggleModal} className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={webformatURL} alt={type} />
      </li>
      {isModalOpen && (
        <Modal
          onClose={handlToggleModal}
          largeImage={largeImageURL}
          alt={type}
        />
      )}
    </>
  );
};
