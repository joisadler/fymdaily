import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomStr } from '../../../services/util.servise';
import { loadEatenFoods } from '../../../actions/HistoryActions';
import Navbar from '../../Navigation/Navbar';
import EatenFoodCard from '../EatenFoodCard';
import Loader from '../../Loader';

const EatenFoodPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  const eatenFoods = useSelector(state => state.history.eatenFoods);
  const isLoading = useSelector(state => state.system.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEatenFoods(user._id));
  }, [user._id, dispatch]);

  const [totalData, setTotalData] = useState({
    totalCalories: 0,
    totalProteins: 0,
    totalFats: 0,
    totalCarbs: 0,
  });

  const {
    totalCalories,
    totalProteins,
    totalFats,
    totalCarbs,
  } = totalData;

  useEffect(() => {
    if (!eatenFoods) return;
    const data = eatenFoods.reduce((acc, food) => {
      const caloriesPer100g = +food.calories;
      const proteinsPer100g = +food.proteins;
      const fatsPer100g = +food.fats;
      const carbsPer100g = +food.carbs;
      const weight = Math.round(+food.weight);
      const calories = Math.round((caloriesPer100g * weight) / 100);
      const proteins = Math.round((proteinsPer100g * weight) / 100);
      const fats = Math.round((fatsPer100g * weight) / 100);
      const carbs = Math.round((carbsPer100g * weight) / 100);
      acc.totalCalories += calories;
      acc.totalProteins += proteins;
      acc.totalFats += fats;
      acc.totalCarbs += carbs;
      return acc;
    }, {
      totalCalories: 0,
      totalProteins: 0,
      totalFats: 0,
      totalCarbs: 0,
    });
    setTotalData(data);
  }, [eatenFoods]);

  return (
    <>
      <main className="page">
        <h1 className="page-title">Eaten foods</h1>
        <ul className="eaten-food-cards">
          {isLoading ? <Loader />
            : (
              <>
                {eatenFoods && eatenFoods.map(food => (
                  <EatenFoodCard key={getRandomStr() + food.name} food={food} />
                ))}
                <li className="eaten-food-total">
                  <h2 className="eaten-food-total-title">Total:</h2>
                  <p>
                    {`Calories: ${totalCalories}`}
                    <br />
                    {`Proteins: ${totalProteins} | Fats: ${totalFats} | Carbs: ${totalCarbs}`}
                  </p>
                </li>
              </>
            )}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default EatenFoodPage;
