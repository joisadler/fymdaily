import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIngredientModal from '../EditIngredientModal';

const CreateCustomRecipeIngredientCard = ({
  name,
  brand,
  weight,
  index,
  updateIngredient,
  removeIngredient,
}) => {
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
    <li className="create-custom-recipe-ingredient-container">
      <div
        className="create-custom-recipe-ingredient"
        onKeyDown={(e) => { handleKeyDown(e); }}
        role="button"
        title={`Add "${name}" to eaten foods`}
        tabIndex={0}
        onClick={openModal}
      >
        {`${index + 1}. `}
        <bdi>
          {name}
        </bdi>
        <bdi>
          {`${brand !== '' ? `, ${brand}` : ''}, `}
        </bdi>
        {`${weight}g`}
      </div>
      {isModalOpen && (
        <EditIngredientModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          name={name}
          brand={brand}
          index={index}
          prevWeight={weight}
          updateIngredient={updateIngredient}
          removeIngredient={removeIngredient}
        />
      )}
    </li>
  );
};

CreateCustomRecipeIngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  updateIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
};

export default CreateCustomRecipeIngredientCard;
