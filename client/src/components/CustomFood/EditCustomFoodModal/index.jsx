import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { updateCustomFoods, deleteCustomFood } from '../../../actions/FoodActions';
import ConfirmModal from '../../ConfirmModal';

const EditCustomFoodModal = ({
  isModalOpen,
  closeModal,
  _id,
  prevName,
  prevBrand,
  prevCalories,
  prevProteins,
  prevFats,
  prevCarbs,
}) => {
  Modal.setAppElement('#root');

  const [name, setName] = useState(prevName);
  const [brand, setBrand] = useState(prevBrand);
  const [calories, setCalories] = useState(prevCalories);
  const [proteins, setProteins] = useState(prevProteins);
  const [fats, setFats] = useState(prevFats);
  const [carbs, setCarbs] = useState(prevCarbs);

  const dispatch = useDispatch();
  const updateFood = useAsyncCallback(async () => {
    const food = {
      _id,
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    };
    dispatch(updateCustomFoods(food));
  });

  const removeFood = useAsyncCallback(async () => {
    dispatch(deleteCustomFood(_id));
  });

  const createConfirmModal = ({ onClose }) => (
    <ConfirmModal
      onClose={onClose}
      text="Are you sure you wish to delete"
      name={name}
      onYes={() => {
        removeFood.execute();
        closeModal();
      }}
      yesButtonText="Delete"
      noButtonText="Return"
    />
  );

  const onRemoveFood = () => {
    confirmAlert({
      customUI: createConfirmModal,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateFood.execute();
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
      >
        &times;
      </button>
      <h2 className="edit-custom-food-header">
        Edit food
      </h2>
      <form
        className="edit-custom-food-form"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          className="edit-custom-food-input edit-custom-food-name-input"
          aria-label="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="edit-custom-food-input edit-custom-food-brand-input"
          aria-label="brand"
          value={brand}
          placeholder="Brand"
          onChange={e => setBrand(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="1000"
          step="any"
          className="edit-custom-food-input edit-custom-food-calories-input"
          aria-label="calories"
          value={calories}
          placeholder="Calories"
          onChange={e => setCalories(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="edit-custom-food-input edit-custom-food-proteins-input"
          aria-label="proteins"
          value={proteins}
          placeholder="Proteins"
          onChange={e => setProteins(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="edit-custom-food-input edit-custom-food-fats-input"
          aria-label="fats"
          value={fats}
          placeholder="Fats"
          onChange={e => setFats(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="edit-custom-food-input edit-custom-food-carbs-input"
          aria-label="carbs"
          value={carbs}
          placeholder="Carbs"
          onChange={e => setCarbs(e.target.value)}
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
            onClick={onRemoveFood}
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

EditCustomFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  prevName: PropTypes.string.isRequired,
  prevBrand: PropTypes.string.isRequired,
  prevCalories: PropTypes.number.isRequired,
  prevProteins: PropTypes.number.isRequired,
  prevFats: PropTypes.number.isRequired,
  prevCarbs: PropTypes.number.isRequired,
};

export default EditCustomFoodModal;
