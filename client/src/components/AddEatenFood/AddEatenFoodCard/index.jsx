import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddEatenFoodModal from '../AddEatenFoodModal';

const AddEatenFoodCard = ({ food }) => {
  const {
    name,
    brand,
  } = food;
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
    <li
      className="add-eaten-food-card"
      onClick={openModal}
      onKeyDown={(e) => { handleKeyDown(e); }}
      role="option"
      aria-selected="false"
    >
      <h2 className="add-eaten-food-card-title">
        {`${name}${brand !== '' ? `, ${brand}` : ''}`}
      </h2>
      <p className="add-eaten-food-card-info">
        {`Calories: ${calories}`}
        <br />
        {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
      </p>
      {isModalOpen && (
        <AddEatenFoodModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          name={name}
          brand={brand}
          calories={calories}
          proteins={proteins}
          fats={fats}
          carbs={carbs}
        />
      )}
    </li>
  );
};

AddEatenFoodCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddEatenFoodCard;
