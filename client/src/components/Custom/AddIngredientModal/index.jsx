import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import 'react-confirm-alert/src/react-confirm-alert.css';

const EditIngredientModal = ({
  isModalOpen,
  closeModal,
  closeSearchModal,
  name,
  brand,
  calories,
  proteins,
  fats,
  carbs,
  addIngredient,
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
    closeSearchModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Add Ingredient"
      className="add-ingredient-modal"
    >
      <button
        className="add-ingredient-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <header className="add-ingredient-header">
        <h2 className="add-ingredient-title">
          {name}
        </h2>
        <h3 className="add-ingredient-subtitle">
          {brand}
        </h3>
      </header>
      <form
        id="add-ingredient-form"
        className="add-ingredient-form"
        onSubmit={onAddIngredient}
      >
        <fieldset className="add-ingredient-weight-inputs">
          <legend
            className="add-ingredient-weight-legend"
          >
            Weight:
          </legend>
          <div>
            <button
              type="button"
              className="add-ingredient-weight-dec-button"
              onClick={decreaseWeight}
              title="Decrease weight"
            >
              -
            </button>
            <input
              className="add-ingredient-weight-input"
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
      <button
        type="submit"
        form="add-ingredient-form"
        className="add-ingredient-submit-button"
      >
        Add
      </button>
    </Modal>
  );
};

EditIngredientModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeSearchModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  addIngredient: PropTypes.func.isRequired,
};

export default EditIngredientModal;
