import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { updateEatenFoods, deleteEatenFood } from '../../../actions/HistoryActions';
import ConfirmModal from '../../ConfirmModal';

const EditEatenFoodModal = ({
  isModalOpen,
  closeModal,
  _id,
  name,
  brand,
  calories,
  proteins,
  fats,
  carbs,
  previousWeight,
}) => {
  Modal.setAppElement('#root');
  const [weight, setWeight] = useState(previousWeight);

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
  const updateFood = useAsyncCallback(async () => {
    const food = {
      _id,
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
      weight,
    };
    dispatch(updateEatenFoods(food));
  });

  const removeFood = useAsyncCallback(async () => {
    const food = {
      _id,
    };
    dispatch(deleteEatenFood(food));
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateFood.execute();
    closeModal();
  };

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

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit eaten food"
      className="edit-eaten-food-modal"
    >
      <button
        className="edit-eaten-food-modal-close-button"
        type="button"
        onClick={e => closeModal(e)}
      >
        &times;
      </button>
      <header className="edit-eaten-food-modal-header">
        <h2 className="edit-eaten-food-modal-title">
          {name}
        </h2>
        <h3 className="edit-eaten-food-modal-subtitle">
          {brand}
        </h3>
      </header>
      <div className="edit-eaten-food-modal-info">
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
        id="edit-eaten-food-modal-form"
        className="edit-eaten-food-modal-form"
        onSubmit={onFormSubmit}
      >
        <fieldset className="edit-eaten-food-modal-weight-inputs">
          <legend
            className="edit-eaten-food-modal-weight-legend"
          >
            Weight:
          </legend>
          <div>
            <button
              type="button"
              className="edit-eaten-food-modal-weight-dec-button"
              onClick={decreaseWeight}
            >
              -
            </button>
            <input
              className="edit-eaten-food-modal-weight-input"
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
              className="edit-eaten-food-modal-weight-inc-button"
              onClick={increaseWeight}
            >
              +
            </button>
          </div>
        </fieldset>
      </form>
      <div className="edit-eaten-food-modal-options-container">
        <button
          type="submit"
          form="edit-eaten-food-modal-form"
          className="edit-eaten-food-modal-submit-button"
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
    </Modal>
  );
};

EditEatenFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  previousWeight: PropTypes.number.isRequired,
};

export default EditEatenFoodModal;
