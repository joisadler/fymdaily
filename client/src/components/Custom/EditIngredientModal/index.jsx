import React, { useState, useRef, useEffect } from 'react';
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

  const [isRefVisible, setIsRefVisible] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (!isRefVisible) {
      return;
    }
    inputRef.current.focus();
  }, [isRefVisible]);

  const [weight, setWeight] = useState(prevWeight);

  const decreaseWeight = () => {
    if (weight <= 10) {
      setWeight(0);
      return;
    }
    setWeight(weight - 10);
  };

  const increaseWeight = () => {
    if (weight >= 990) {
      setWeight(1000);
      return;
    }
    setWeight(weight + 10);
  };

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
      contentLabel="Edit ingredient"
      className="edit-ingredient-modal"
    >
      <button
        className="edit-ingredient-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <header className="edit-ingredient-header">
        <h2 className="edit-ingredient-title">
          {name}
        </h2>
        <h3 className="edit-ingredient-subtitle">
          {brand}
        </h3>
      </header>
      <form
        id="edit-ingredient-form"
        className="edit-ingredient-form"
        onSubmit={onUpdateIngredient}
      >
        <fieldset className="edit-ingredient-weight-inputs">
          <legend
            className="edit-ingredient-weight-legend"
          >
            Weight:
          </legend>
          <div>
            <button
              type="button"
              className="edit-ingredient-weight-dec-button"
              onClick={decreaseWeight}
              title="Decrease weight"
            >
              -
            </button>
            <input
              className="edit-ingredient-weight-input"
              aria-label="weight"
              type="number"
              min="0"
              max="1000"
              step="any"
              value={weight}
              placeholder="Weight"
              onChange={e => setWeight(+e.target.value)}
              ref={(el) => { inputRef.current = el; setIsRefVisible(!!el); }}
              required
            />
            <button
              type="button"
              className="add-ingredient-weight-inc-button"
              onClick={increaseWeight}
              title="Increase weight"
            >
              +
            </button>
          </div>
        </fieldset>
      </form>
      <div className="edit-ingredient-submit-button-container">
        <button
          type="submit"
          form="edit-ingredient-form"
          className="edit-ingredient-submit-button"
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
