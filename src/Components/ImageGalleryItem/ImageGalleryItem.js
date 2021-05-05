import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({onClickGalleryItem, src, srcOriginal, id, alt}) => {
  return (
    <li className="ImageGalleryItem"  onClick={onClickGalleryItem}>
      <img
        src={src}
        alt={alt}
        data-id={id}
        data-source={srcOriginal}
        className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  srcOriginal: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  onClickGalleryItem: PropTypes.func.isRequired,

};



export default ImageGalleryItem;