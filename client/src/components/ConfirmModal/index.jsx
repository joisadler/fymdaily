import React from 'react';
import PropTypes from 'prop-types';

const ConfirmModal = ({
  onClose,
  text,
  name,
  onYes,
  onNo,
  yesButtonText,
  noButtonText,
}) => (
  <div className="confirm-modal">
    <header className="confirm-modal-header">
      <h2 className="confirm-modal-title">
        {text}
      </h2>
      <h3 className="confirm-modal-item-name">
        <p>
          {name}
          <span>
            ?
          </span>
        </p>
      </h3>
    </header>
    <section className="confirm-modal-options">
      <button
        type="button"
        className="confirm-modal-no-button"
        onClick={() => {
          if (onNo) onNo();
          onClose();
        }}
      >
        {noButtonText}
      </button>
      <button
        type="button"
        className="confirm-modal-yes-button"
        onClick={() => {
          if (onYes) onYes();
          onClose();
        }}
      >
        {yesButtonText}
      </button>
    </section>
  </div>
);

ConfirmModal.defaultProps = {
  text: 'Are you shure',
  name: null,
  onYes: null,
  onNo: null,
  yesButtonText: 'Yes',
  noButtonText: 'No',
};

ConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
  name: PropTypes.string,
  onYes: PropTypes.func,
  onNo: PropTypes.func,
  yesButtonText: PropTypes.string,
  noButtonText: PropTypes.string,
};

export default ConfirmModal;
