import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditCustomRecipeModal from '../EditCustomRecipeModal';

const CustomRecipeCard = ({ recipe }) => {
  const { _id, name, ingredients } = recipe;
  const calories = Math.round(+recipe.calories);
  const proteins = Math.round(+recipe.proteins);
  const fats = Math.round(+recipe.fats);
  const carbs = Math.round(+recipe.carbs);

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
    <li className="custom-recipe-card-container">
      <div
        className="custom-recipe-card"
        onClick={openModal}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        role="button"
        title={`Edit "${name}"`}
        tabIndex={0}
      >
        <h2 className="custom-recipe-card-title">{`${name}`}</h2>
        <p className="custom-recipe-card-info">
          {`Calories: ${calories}`}
          <br />
          {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
        </p>
        {isModalOpen && (
          <EditCustomRecipeModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            _id={_id}
            prevName={name}
            prevIngredients={ingredients}
            prevCalories={calories}
            prevProteins={proteins}
            prevFats={fats}
            prevCarbs={carbs}
          />
        )}
      </div>
    </li>
  );
};

CustomRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomRecipeCard;
