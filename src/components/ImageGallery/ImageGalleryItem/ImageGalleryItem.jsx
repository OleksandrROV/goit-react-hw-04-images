import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  handlToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL, type } = this.props.image;
    const { isModalOpen } = this.state;

    return (
      <>
        <li onClick={this.handlToggleModal} className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={type}
          />
        </li>
        {isModalOpen && (
          <Modal
            onClose={this.handlToggleModal}
            largeImage={largeImageURL}
            alt={type}
          />
        )}
      </>
    );
  }
}
