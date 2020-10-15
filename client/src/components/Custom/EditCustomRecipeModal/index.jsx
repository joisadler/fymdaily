import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConfirmModal from '../../ConfirmModal';
import {
  updateCustomRecipes,
  deleteCustomRecipe,
} from '../../../actions/RecipeActions';
import { getRandomStr } from '../../../services/util.service';
import SearchIngredientModal from '../SearchIngredientModal';
import CustomRecipeIngredientCard from '../CreateCustomRecipeIngredientCard';

const EditCustomRecipeModal = ({
  isModalOpen,
  closeModal,
  _id,
  prevName,
  prevIngredients,
  prevCalories,
  prevProteins,
  prevFats,
  prevCarbs,
}) => {
  Modal.setAppElement('#root');

  const [
    isSearchIngredientModalOpen,
    setIsSearchIngredientModalOpen,
  ] = useState(false);

  const openSearchIngredientModal = () => {
    setIsSearchIngredientModalOpen(true);
  };

  const closeSearchIngredientModal = (e) => {
    if (e) e.stopPropagation();
    setIsSearchIngredientModalOpen(false);
  };

  const [name, setName] = useState(prevName);
  const [ingredients, setIngredients] = useState(prevIngredients);
  const [calories, setCalories] = useState(prevCalories);
  const [proteins, setProteins] = useState(prevProteins);
  const [fats, setFats] = useState(prevFats);
  const [carbs, setCarbs] = useState(prevCarbs);

  const setInfo = (ings) => {
    const totalWeight = ings
      .reduce((acc, currentIngr) => currentIngr.weight + acc, 0);
    const totalCalories = ings
      .reduce((acc, currentIngr) => currentIngr.calories + acc, 0);
    const totalProteins = ings
      .reduce((acc, currentIngr) => currentIngr.proteins + acc, 0);
    const totalFats = ings
      .reduce((acc, currentIngr) => currentIngr.fats + acc, 0);
    const totalCarbs = ings
      .reduce((acc, currentIngr) => currentIngr.carbs + acc, 0);
    const recipeCalories = Math
      .round((totalCalories * 1000) / totalWeight) / 10;
    const recipeProteins = Math
      .round((totalProteins * 1000) / totalWeight) / 10;
    const recipeFats = Math.round((totalFats * 1000) / totalWeight) / 10;
    const recipeCarbs = Math.round((totalCarbs * 1000) / totalWeight) / 10;
    setCalories(Number.isNaN(recipeCalories) ? 0 : recipeCalories);
    setProteins(Number.isNaN(recipeProteins) ? 0 : recipeProteins);
    setFats(Number.isNaN(recipeFats) ? 0 : recipeFats);
    setCarbs(Number.isNaN(recipeCarbs) ? 0 : recipeCarbs);
  };

  useEffect(() => {
    setInfo(ingredients);
  }, [ingredients]);

  const addIngredient = (
    ingredientName,
    ingredientBrand,
    ingredientWeight,
    ingredientCalories,
    ingredientProteins,
    ingredientFats,
    ingredientCarbs,
  ) => {
    const ingredient = {
      name: ingredientName,
      brand: ingredientBrand,
      weight: ingredientWeight,
      calories: ingredientCalories,
      proteins: ingredientProteins,
      fats: ingredientFats,
      carbs: ingredientCarbs,
    };
    const updatedIngredients = [...ingredients, ingredient];
    setIngredients(updatedIngredients);
    setInfo(updatedIngredients);
  };

  const updateIngredient = (
    ingredientWeight,
    ingredientIndex,
  ) => {
    const updatedIngredients = ingredients.map((ingr, i) => {
      if (i === ingredientIndex) {
        return { ...ingr, weight: ingredientWeight };
      }
      return ingr;
    });
    setIngredients(updatedIngredients);
    setInfo(updatedIngredients);
  };

  const removeIngredient = (
    ingredientIndex,
  ) => {
    const updatedIngredients = ingredients
      .filter((ingr, i) => i !== ingredientIndex);
    setIngredients(updatedIngredients);
    setInfo(updatedIngredients);
  };

  const dispatch = useDispatch();
  const editRecipe = useAsyncCallback(async () => {
    const recipe = {
      _id,
      name,
      calories,
      proteins,
      fats,
      carbs,
      ingredients,
    };
    dispatch(updateCustomRecipes(recipe));
  });

  const deleteRecipe = useAsyncCallback(async () => {
    dispatch(deleteCustomRecipe(_id));
  });

  const createConfirmModal = ({ onClose }) => (
    <ConfirmModal
      onClose={onClose}
      text="Are you sure you wish to delete"
      name={name}
      onYes={() => {
        deleteRecipe.execute();
        closeModal();
      }}
      yesButtonText="Delete"
      noButtonText="Return"
    />
  );

  const onDeleteRecipe = () => {
    confirmAlert({
      customUI: createConfirmModal,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editRecipe.execute();
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit recipe"
      className="edit-custom-recipe-modal"
    >
      <button
        className="edit-custom-recipe-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <h2 className="edit-custom-recipe-header">
        Edit recipe
      </h2>
      <form
        className="edit-custom-recipe-form"
        id="edit-custom-recipe-form"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          className="edit-custom-recipe-input edit-custom-recipe-name-input"
          aria-label="name"
          value={name}
          placeholder="Recipe name"
          onChange={e => setName(e.target.value)}
          required
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <h3 className="edit-custom-recipe-ingredients-title">
          Ingredients:
        </h3>
        <ul className="edit-custom-recipe-ingredients">
          {ingredients.map((ingr, i) => (
            <CustomRecipeIngredientCard
              name={ingr.name}
              brand={ingr.brand}
              weight={ingr.weight}
              index={i}
              key={getRandomStr()}
              updateIngredient={updateIngredient}
              removeIngredient={removeIngredient}
            />
          ))}
          <button
            type="button"
            className="edit-custom-recipe-add-ingredient-button"
            onClick={() => openSearchIngredientModal()}
          >
            + Add ingredient
          </button>
        </ul>
        {isSearchIngredientModalOpen && (
        <SearchIngredientModal
          isModalOpen={isSearchIngredientModalOpen}
          closeModal={closeSearchIngredientModal}
          addIngredient={addIngredient}
        />
        )}
        <div
          className="edit-custom-recipe-info"
        >
          <h2 className="edit-custom-recipe-info-title">
            {`100g of ${name ? `"${name}"` : 'the recipe above'} contains:`}
          </h2>
          <p>
            {`Calories: ${calories}`}
            <br />
            {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
          </p>
        </div>
      </form>
      <div className="edit-custom-recipe-options-container">
        <button
          type="submit"
          form="edit-custom-recipe-form"
          className="edit-custom-recipe-submit-button"
        >
          Save
        </button>
        <button
          type="button"
          aria-label={`Delete ${name}`}
          className="edit-custom-recipe-delete-button"
          onClick={onDeleteRecipe}
          title={`Delete "${name}" from custom recipes`}
        >
          <FontAwesomeIcon
            icon={['fas', 'trash']}
            className="edit-custom-recipe-delete-button-icon"
          />
        </button>
      </div>
    </Modal>
  );
};

EditCustomRecipeModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  prevName: PropTypes.string.isRequired,
  prevIngredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  prevCalories: PropTypes.number.isRequired,
  prevProteins: PropTypes.number.isRequired,
  prevFats: PropTypes.number.isRequired,
  prevCarbs: PropTypes.number.isRequired,
};

export default EditCustomRecipeModal;
