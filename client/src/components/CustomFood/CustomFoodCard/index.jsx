import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditCustomFoodModal from '../EditCustomFoodModal';

const CustomFoodCard = ({ food }) => {
  const {
    _id,
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
      className="custom-food-card"
      onClick={openModal}
      onKeyDown={(e) => { handleKeyDown(e); }}
      role="option"
      aria-selected="false"
    >
      <h2 className="custom-food-card-title">
        {`${name}${brand !== '' ? `, ${brand}` : ''}`}
      </h2>
      <p className="custom-food-card-info">
        {`Calories: ${calories}`}
        <br />
        {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
      </p>
      {isModalOpen && (
        <EditCustomFoodModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          _id={_id}
          prevName={name}
          prevBrand={brand}
          prevCalories={calories}
          prevProteins={proteins}
          prevFats={fats}
          prevCarbs={carbs}
        />
      )}
    </li>
  );
};

CustomFoodCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomFoodCard;
