import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { getRandomStr } from '../../../services/util.service';
import { getFoods } from '../../../services/food.service';
import Loader from '../../Loader';
import SearchIngredientCard from '../SearchIngredientCard';
import { useAsync } from 'react-async-hook';

const SearchIngredientModal = ({
  isModalOpen,
  closeModal,
  addIngredient,
}) => {
  const [inputText, setInputText] = useState('');
  // const foods = useSelector(state => state.food.foods);
  
  const foods = useAsync(getFoods, [inputText]);
  console.log("foods:", foods.result)
  const isLoading = useSelector(state => state.system.isLoading);

  const handleSearchInput = ({ value }) => {
    setInputText(value);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Search ingredient"
      className="search-ingredient"
    >
      <button
        className="search-ingredient-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <header className="options-container">
        <h2 className="search-ingredient-header">
          Search Ingredient
        </h2>
        <DebounceInput
          minLength={0}
          type="search"
          debounceTimeout={300}
          className="search-ingredient-search"
          placeholder="Search ingredient"
          aria-label="Search ingredient"
          value={inputText}
          onChange={(e) => { handleSearchInput(e.target); }}
          autoFocus
        />
      </header>
      <ul className="search-ingredient-cards">
        {/* {isLoading
          ? <Loader />
          : foods
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(food => (
              <SearchIngredientCard
                key={food._id ? food._id : getRandomStr() + food.name}
                food={food}
                addIngredient={addIngredient}
              />
            ))} */}
        {foods.loading && <Loader />}
        {foods.result && (
          foods.result
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(food => (
            <SearchIngredientCard
              key={food._id ? food._id : getRandomStr() + food.name}
              food={food}
              addIngredient={addIngredient}
            />))
        )}
      </ul>
    </Modal>
  );
};

SearchIngredientModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
};

export default SearchIngredientModal;
