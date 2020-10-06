import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadEatenFoods } from '../../../actions/HistoryActions';
import getNumbers from '../../../services/calculation.service';
import CaloriesChart from '../CaloriesChart';
import Loader from '../../Loader';
import Navbar from '../../Navigation/Navbar';
import MacrosContainer from '../MacrosContainer';

const HomePage = () => {
  const [isAlternateContentShown, setIsAlternateContentShown] = useState(false);
  const toggleAlternateContent = () => {
    setIsAlternateContentShown(!isAlternateContentShown);
  };

  const user = useSelector(state => state.user.loggedInUser);
  const eatenFoods = useSelector(state => state.history.eatenFoods);
  const isLoading = useSelector(state => state.system.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEatenFoods(user._id));
  }, [user._id, dispatch]);

  const numbers = eatenFoods ? getNumbers(user, eatenFoods) : {};

  return (
    <>
      <main className="page">
        {isLoading ? <Loader />
          : (
            <>
              <CaloriesChart
                numbers={numbers}
                isAlternateContentShown={isAlternateContentShown}
                toggleAlternateContent={toggleAlternateContent}
              />
              <MacrosContainer numbers={numbers} />
            </>
          )}
      </main>
      <Navbar />
    </>
  );
};

export default HomePage;
