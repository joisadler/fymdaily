import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ConfirmModal from '../../ConfirmModal';

const EditIngredientModal = ({
  isModalOpen,
  closeModal,
  name,
  brand,
  index,
  prevWeight,
  updateIngredient,
  removeIngredient,
}) => {
  Modal.setAppElement('#root');

  const [weight, setWeight] = useState(prevWeight);

  const onUpdateIngredient = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateIngredient(weight, index);
    closeModal();
  };

  const createConfirmModal = ({ onClose }) => (
    <ConfirmModal
      onClose={onClose}
      text="Are you sure you wish to delete"
      name={name}
      onYes={() => {
        removeIngredient(index);
        closeModal();
      }}
      yesButtonText="Delete"
      noButtonText="Return"
    />
  );

  const onRemoveIngredient = () => {
    confirmAlert({
      customUI: createConfirmModal,
    });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit food"
      className="edit-custom-food"
    >
      <button
        className="edit-custom-food-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <h2 className="edit-custom-food-header">
        <bdi>
          {name}
        </bdi>
        <bdi>
          {`${brand !== '' ? `, ${brand}` : ''}, `}
        </bdi>
      </h2>
      <form
        className="edit-custom-food-form"
        onSubmit={onUpdateIngredient}
      >
        <input
          type="number"
          min="0"
          max="1000"
          step="any"
          className="edit-custom-food-input edit-custom-food-calories-input"
          aria-label="weight"
          value={weight}
          placeholder="Weight"
          onChange={e => setWeight(+e.target.value)}
          required
        />
        <div className="edit-custom-food-submit-button-container">
          <button
            type="submit"
            className="edit-custom-food-submit-button"
          >
            Save
          </button>
          <button
            type="button"
            aria-label="Delete eaten food"
            className="edit-eaten-food-modal-delete-button"
            onClick={onRemoveIngredient}
            title={`Delete "${name}" from custom foods`}
          >
            <FontAwesomeIcon
              icon={['fas', 'trash']}
              className="edit-eaten-food-delete-button-icon"
            />
          </button>
        </div>
      </form>
    </Modal>
  );
};

EditIngredientModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  prevWeight: PropTypes.number.isRequired,
  updateIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
};

export default EditIngredientModal;
