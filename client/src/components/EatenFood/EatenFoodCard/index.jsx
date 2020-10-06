import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditEatenFoodModal from '../EditEatenFoodModal';

const EatenFoodCard = ({ food }) => {
  const {
    _id,
    name,
    brand,
  } = food;
  const caloriesPer100g = +food.calories;
  const proteinsPer100g = +food.proteins;
  const fatsPer100g = +food.fats;
  const carbsPer100g = +food.carbs;
  const weight = Math.round(+food.weight);
  const calories = Math.round((caloriesPer100g * weight) / 100);
  const proteins = Math.round((proteinsPer100g * weight) / 100);
  const fats = Math.round((fatsPer100g * weight) / 100);
  const carbs = Math.round((carbsPer100g * weight) / 100);

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
      className="eaten-food-card"
      onClick={openModal}
      onKeyDown={(e) => { handleKeyDown(e); }}
      role="option"
      aria-selected="false"
    >
      <h2 className="eaten-food-card-title">
        <bdi>
          {name}
        </bdi>
        <bdi>
          {`${brand !== '' ? `, ${brand}` : ''}, `}
        </bdi>
        {`${weight}g`}
      </h2>
      <p className="eaten-food-card-info">
        {`Calories: ${calories}`}
        <br />
        {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
      </p>
      {isModalOpen && (
        <EditEatenFoodModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          _id={_id}
          name={name}
          brand={brand}
          calories={caloriesPer100g}
          proteins={proteinsPer100g}
          fats={fatsPer100g}
          carbs={carbsPer100g}
          previousWeight={weight}
        />
      )}
    </li>
  );
};

EatenFoodCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EatenFoodCard;
