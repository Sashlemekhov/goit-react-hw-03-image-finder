import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  };

  handleKeydown = (e) => {
    this.props.closeModalByKeydown(e);
  };
  
  render() {
    const { srcImgModal, altImgModal, closeModalByClick  } = this.props;
    return createPortal(
      <div className="Overlay" onClick={closeModalByClick}>
        <div className="Modal">
          <img src={srcImgModal} alt={altImgModal} />
          <button type="button" className="ModalClose-button" onClick={closeModalByClick}>
            <span className="Button-label">Close</span>
          </button>
        </div>
      </div>,
      modalRoot
    );
  };
};

Modal.propTypes = {
  srcImgModal: PropTypes.string.isRequired,
  altImgModal: PropTypes.string.isRequired,
  closeModalByClick: PropTypes.func.isRequired
};

export default Modal;
