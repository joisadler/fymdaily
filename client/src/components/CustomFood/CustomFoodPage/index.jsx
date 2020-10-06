import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import useFoodSearch from '../../../hooks/useFoodSearch';
import Loader from '../../Loader';
import Navbar from '../../Navigation/Navbar';
import CustomFoodCard from '../CustomFoodCard';

const CustomFoodPage = () => {
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
          <h1 className="page-title">Custom Foods</h1>
          <DebounceInput
            minLength={0}
            type="search"
            debounceTimeout={300}
            className="custom-foods-search"
            aria-label="Search food"
            placeholder="Search food"
            value={inputText}
            inputRef={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </header>
        <ul className="custom-foods-cards">
          {isLoading ? <Loader />
            : foods
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(food => (
                <CustomFoodCard key={food._id} food={food} />
              ))}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default CustomFoodPage;
