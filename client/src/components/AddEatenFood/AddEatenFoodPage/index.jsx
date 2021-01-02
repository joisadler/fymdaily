import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import useSearch from '../../../hooks/useSearch';
import { getRandomStr } from '../../../services/util.service';
import Loader from '../../Loader';
import Navbar from '../../Navigation/Navbar';
import AddEatenFoodCard from '../AddEatenFoodCard';

const AddEatenFoodPage = () => {
  const {
    inputText,
    setInputText,
    foods,
    showOnlyFoodsCreatedByUser,
    setShowOnlyFoodsCreatedByUser,
  } = useSearch('food');

  const isLoading = useSelector(state => state.system.isLoading);

  const searchInput = useRef(null);
  useEffect(() => {
    // searchInput.current.focus();
  }, []);

  const handleSearchInput = ({ value }) => {
    setInputText(value);
  };

  const handleShowOnlyFoodsCreatedByUserChange = ({ checked }) => {
    console.log('checked: ', checked)
    setShowOnlyFoodsCreatedByUser(checked);
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
          <div className="show-only-foods-created-by-me-container">
            <input
              type="checkbox"
              className="show-only-foods-created-by-me-checkbox"
              name="showOnlyFoodsCreatedByUser"
              checked={showOnlyFoodsCreatedByUser}
              id="showOnlyFoodsCreatedByUser"
              onChange={(e) => handleShowOnlyFoodsCreatedByUserChange(e.target)}
            />
            <label
              className="show-only-foods-created-by-me-label"
              htmlFor="showOnlyFoodsCreatedByUser"
            >
              Show only foods created by me
            </label>
          </div>
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
