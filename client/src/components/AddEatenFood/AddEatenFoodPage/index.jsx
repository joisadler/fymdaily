import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import useFoodSearch from '../../../hooks/useFoodSearch';
import { getRandomStr } from '../../../services/util.servise';
import Loader from '../../Loader';
import Navbar from '../../Navigation/Navbar';
import AddEatenFoodCard from '../AddEatenFoodCard';

const AddEatenFoodPage = () => {
  const {
    inputText,
    setInputText,
    foods,
  } = useFoodSearch();

  const isLoading = useSelector(state => state.system.isLoading);

  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleSearchInput = ({ value }) => {
    setInputText(value);
  };

  return (
    <>
      <main className="page">
        <header className="options-container">
          <h1 className="page-title">Add eaten food</h1>
          <DebounceInput
            minLength={0}
            type="search"
            debounceTimeout={300}
            className="add-eaten-food-search"
            placeholder="Search food"
            aria-label="Search food"
            value={inputText}
            inputRef={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </header>
        <ul className="add-eaten-food-cards">
          {isLoading
            ? <Loader />
            : foods
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(food => (
                <AddEatenFoodCard
                  key={food._id ? food._id : getRandomStr() + food.name}
                  food={food}
                />
              ))}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default AddEatenFoodPage;
