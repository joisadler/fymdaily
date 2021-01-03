import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { addCustomRecipe } from '../../../actions/RecipeActions';
import { getRandomStr } from '../../../services/util.service';
import SearchIngredientModal from '../SearchIngredientModal';
import CreateCustomRecipeIngredientCard from '../CreateCustomRecipeIngredientCard';

const CreateCustomRecipeModal = ({ isModalOpen, closeModal }) => {
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

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const [calories, setCalories] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const setInfo = (ings) => {
    const totalWeight = ings.reduce(
      (acc, currentIngr) => currentIngr.weight + acc,
      0
    );
    const totalCalories = ings.reduce(
      (acc, currentIngr) => currentIngr.calories + acc,
      0
    );
    const totalProteins = ings.reduce(
      (acc, currentIngr) => currentIngr.proteins + acc,
      0
    );
    const totalFats = ings.reduce(
      (acc, currentIngr) => currentIngr.fats + acc,
      0
    );
    const totalCarbs = ings.reduce(
      (acc, currentIngr) => currentIngr.carbs + acc,
      0
    );
    const recipeCalories =
      Math.round((totalCalories * 1000) / totalWeight) / 10;
    const recipeProteins =
      Math.round((totalProteins * 1000) / totalWeight) / 10;
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
    ingredientCarbs
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

  const updateIngredient = (ingredientWeight, ingredientIndex) => {
    const updatedIngredients = ingredients.map((ingr, i) => {
      if (i === ingredientIndex) {
        return { ...ingr, weight: ingredientWeight };
      }
      return ingr;
    });
    setIngredients(updatedIngredients);
    setInfo(updatedIngredients);
  };

  const removeIngredient = (ingredientIndex) => {
    const updatedIngredients = ingredients.filter(
      (ingr, i) => i !== ingredientIndex
    );
    setIngredients(updatedIngredients);
    setInfo(updatedIngredients);
  };

  const dispatch = useDispatch();
  const createRecipe = useAsyncCallback(async () => {
    const recipe = {
      name,
      calories,
      proteins,
      fats,
      carbs,
      ingredients,
    };
    dispatch(addCustomRecipe(recipe));
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    createRecipe.execute();
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Create recipe"
      className="create-custom-recipe-modal"
    >
      <button
        className="create-custom-recipe-close-button"
        type="button"
        onClick={(e) => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <h2 className="create-custom-recipe-header">Create new recipe</h2>
      <form className="create-custom-recipe-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="create-custom-recipe-input create-custom-recipe-name-input"
          aria-label="name"
          value={name}
          placeholder="Recipe name"
          onChange={(e) => setName(e.target.value)}
          required
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <h3 className="create-custom-recipe-ingredients-title">Ingredients:</h3>
        <ul className="create-custom-recipe-ingredients">
          {ingredients.map((ing, i) => (
            <CreateCustomRecipeIngredientCard
              name={ing.name}
              brand={ing.brand}
              weight={ing.weight}
              index={i}
              key={getRandomStr()}
              updateIngredient={updateIngredient}
              removeIngredient={removeIngredient}
            />
          ))}
          <button
            type="button"
            className="create-custom-recipe-add-ingredient-button"
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
        <div className="create-custom-recipe-info">
          <h2 className="create-custom-recipe-info-title">
            {`100g of ${name ? `"${name}"` : 'the recipe above'} contains:`}
          </h2>
          <p>
            {`Calories: ${calories}`}
            <br />
            {`Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
          </p>
        </div>
        <div className="create-custom-recipe-submit-button-container">
          <button type="submit" className="create-custom-recipe-submit-button">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

CreateCustomRecipeModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateCustomRecipeModal;
