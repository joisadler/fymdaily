import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { addEatenFood } from '../../../actions/HistoryActions';

const AddEatenFoodModal = ({
  isModalOpen,
  closeModal,
  name,
  brand,
  calories,
  proteins,
  fats,
  carbs,
}) => {
  Modal.setAppElement('#root');
  const [weight, setWeight] = useState(100);

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

  const dispatch = useDispatch();
  const addFood = useAsyncCallback(async () => {
    const food = {
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
      weight,
    };
    dispatch(addEatenFood(food));
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    addFood.execute();
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Add food"
      className="add-eaten-food-modal"
    >
      <button
        className="add-eaten-food-modal-close-button"
        type="button"
        onClick={e => closeModal(e)}
      >
        &times;
      </button>
      <header className="add-eaten-food-modal-header">
        <h2 className="add-eaten-food-modal-title">
          {name}
        </h2>
        <h3 className="add-eaten-food-modal-subtitle">
          {brand}
        </h3>
      </header>
      <div className="add-eaten-food-modal-info">
        <p>
          {`Calories: ${(calories * weight) / 100}`}
        </p>
        <p>
          {`Proteins: ${(proteins * weight) / 100}`}
        </p>
        <p>
          {`Fats: ${(fats * weight) / 100}`}
        </p>
        <p>
          {`Carbs: ${(carbs * weight) / 100}`}
        </p>
      </div>
      <form
        id="add-eaten-food-modal-form"
        className="add-eaten-food-modal-form"
        onSubmit={onFormSubmit}
      >
        <fieldset className="add-eaten-food-modal-weight-inputs">
          <legend
            className="add-eaten-food-modal-weight-legend"
          >
            Weight:
          </legend>
          <div>
            <button
              type="button"
              className="add-eaten-food-modal-weight-dec-button"
              onClick={decreaseWeight}
            >
              -
            </button>
            <input
              className="add-eaten-food-modal-weight-input"
              aria-label="weight"
              type="number"
              min="0"
              max="1000"
              step="any"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
            <button
              type="button"
              className="add-eaten-food-modal-weight-inc-button"
              onClick={increaseWeight}
            >
              +
            </button>
          </div>
        </fieldset>
      </form>
      <button
        type="submit"
        form="add-eaten-food-modal-form"
        className="add-eaten-food-modal-submit-button"
      >
        Add
      </button>
    </Modal>
  );
};

AddEatenFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
};

export default AddEatenFoodModal;
