import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import 'react-confirm-alert/src/react-confirm-alert.css';

const EditIngredientModal = ({
  isModalOpen,
  closeModal,
  name,
  brand,
  calories,
  proteins,
  fats,
  carbs,
  addIngredient,
}) => {
  Modal.setAppElement('#root');

  const [weight, setWeight] = useState(100);

  const onAddIngredient = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addIngredient(
      name,
      brand,
      weight,
      calories,
      proteins,
      fats,
      carbs,
    );
    closeModal();
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
        onSubmit={onAddIngredient}
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
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  addIngredient: PropTypes.func.isRequired,
};

export default EditIngredientModal;
