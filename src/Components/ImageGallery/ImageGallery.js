import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal';




class ImageGallery extends React.Component {
  state = {
    showModal: false,
    srcImgModal: '',
    altImgModal: ''
  };

  openModal = (e) => {
    this.setState({
      showModal: true,
      srcImgModal: e.target.dataset.source,
      altImgModal: e.target.alt
    });
  };

  closeModalByClick = (e) => {
    if (e.target === e.currentTarget) {
      this.setState({
        showModal: false,
        srcImgModal: '',
        altImgModal: ''
      });
    };
  };

  closeModalByKeydown = (e) => {
    if (e.code === 'Escape') {
      this.setState({
        showModal: false,
        srcImgModal: '',
        altImgModal: ''
      });
    };
  };



  render() {
    const imageData = this.props.imageData;
    const { showModal, srcImgModal, altImgModal } = this.state;

    return (
      <>
        <ul className="ImageGallery">
        {imageData.map(el => (
          <ImageGalleryItem
            onClickGalleryItem={this.openModal}
            key={uuidv4()}
            src={el.webformatURL}
            srcOriginal={el.largeImageURL}
            id={el.id}
            alt={el.tags}
          />
        ))}
      </ul>
        {showModal &&
          <Modal
            srcImgModal={srcImgModal}
            altImgModal={altImgModal}
            closeModalByClick={this.closeModalByClick}
            closeModalByKeydown={this.closeModalByKeydown}
          />}
      </>
      
    );
  };
}
  

ImageGallery.propsType = {
  hits: PropTypes.array.isRequired
};


export default ImageGallery;