import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { setItemsType } from '../../../actions/CustomPageActions';
import useSearch from '../../../hooks/useSearch';
import Loader from '../../Loader';
import Navbar from '../../Navigation/Navbar';
import CustomFoodCard from '../CustomFoodCard';
import CustomRecipeCard from '../CustomRecipeCard';

const CustomPage = () => {
  const isLoading = useSelector(state => state.system.isLoading);
  const itemsType = useSelector(state => state.customPage.itemsType);
  const itemType = itemsType.slice(0, itemsType.length - 1);

  const {
    inputText,
    setInputText,
    foods,
    recipes,
    showOnlyFoodsCreatedByUser,
    setShowOnlyFoodsCreatedByUser,
  } = useSearch(itemsType);

  const searchInput = useRef(null);
  useEffect(() => {
    // searchInput.current.focus();
  }, []);

  const dispatch = useDispatch();
  const handleItemsTypeChange = ({ value }) => {
    dispatch(setItemsType(value));
    searchInput.current.focus();
  };

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
        <header className="custom-page-header">
          <h1 className="page-title">
            <span>
              Custom&nbsp;
            </span>
            <select
              aria-label="Items type"
              className="custom-page-items-type"
              value={itemsType}
              onChange={e => handleItemsTypeChange(e.target)}
              tabIndex={0}
            >
              <option value="foods">foods</option>
              <option value="recipes">recipes</option>
            </select>
          </h1>
          <DebounceInput
            minLength={0}
            type="search"
            debounceTimeout={300}
            className="custom-page-search"
            aria-label={`Search ${itemType}`}
            placeholder={`Search ${itemType}`}
            value={inputText}
            inputRef={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
            tabIndex={0}
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
        <ul className="custom-page-cards">
          {isLoading ? <Loader />
            : (
              <>
                {itemsType === 'foods' && foods && foods
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(food => (
                    <CustomFoodCard key={food._id} food={food} />
                  ))}
                {itemsType === 'recipes' && recipes && recipes
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(recipe => (
                    <CustomRecipeCard key={recipe._id} recipe={recipe} />
                  ))}
              </>
            )}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default CustomPage;
