import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { addCustomFood } from '../../../actions/FoodActions';

const CreateCustomFoodModal = ({
  isModalOpen,
  closeModal,
}) => {
  Modal.setAppElement('#root');

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [calories, setCalories] = useState('');
  const [proteins, setProteins] = useState('');
  const [fats, setFats] = useState('');
  const [carbs, setCarbs] = useState('');

  const dispatch = useDispatch();
  const createFood = useAsyncCallback(async () => {
    const food = {
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    };
    dispatch(addCustomFood(food));
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    createFood.execute();
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Create food"
      className="create-custom-food"
    >
      <button
        className="create-custom-food-close-button"
        type="button"
        onClick={e => closeModal(e)}
      >
        &times;
      </button>
      <h2 className="create-custom-food-header">
        Create new food
      </h2>
      <form
        className="create-custom-food-form"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          className="create-custom-food-input create-custom-food-name-input"
          aria-label="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="create-custom-food-input create-custom-food-brand-input"
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
          className="create-custom-food-input create-custom-food-calories-input"
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
          className="create-custom-food-input create-custom-food-proteins-input"
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
          className="create-custom-food-input create-custom-food-fats-input"
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
          className="create-custom-food-input create-custom-food-carbs-input"
          aria-label="carbs"
          value={carbs}
          placeholder="Carbs"
          onChange={e => setCarbs(e.target.value)}
          required
        />
        <div className="create-custom-food-submit-button-container">
          <button
            type="submit"
            className="create-custom-food-submit-button"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

CreateCustomFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateCustomFoodModal;
