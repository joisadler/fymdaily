import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIngredientModal from '../AddIngredientModal';

const SearchIngredientCard = ({ food, addIngredient, closeSearchModal }) => {
  const { name, brand } = food;
  const calories = Math.round(+food.calories);
  const proteins = Math.round(+food.proteins);
  const fats = Math.round(+food.fats);
  const carbs = Math.round(+food.carbs);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    const code = e.charCode || e.keyCode;
    if (code === 13) {
      openModal();
    }
  };

  return (
    <li className="search-ingredient-card-container">
      <div
        className="search-ingredient-card"
        onClick={openModal}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        role="button"
        title={`Add "${name}" to eaten foods`}
        tabIndex={0}
      >
        <h2 className="search-ingredient-card-title">
          {`${name}${brand !== '' ? `, ${brand}` : ''}`}
        </h2>
        <p className="search-ingredient-card-info">
          {`Calories: ${calories}`}
          <br />
          {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
        </p>
        {isModalOpen && (
          <AddIngredientModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            closeSearchModal={closeSearchModal}
            name={name}
            brand={brand}
            calories={calories}
            proteins={proteins}
            fats={fats}
            carbs={carbs}
            addIngredient={addIngredient}
          />
        )}
      </div>
    </li>
  );
};

SearchIngredientCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
  addIngredient: PropTypes.func.isRequired,
  closeSearchModal: PropTypes.func.isRequired,
};

export default SearchIngredientCard;
