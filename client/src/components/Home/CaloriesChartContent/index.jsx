import React from 'react';
import PropTypes from 'prop-types';

const CaloriesChartContent = ({ numbers, isAlternateContentShown }) => {
  const {
    dailyCalorieNeed,
    currentCalories,
    currentCaloriesRemainder,
    currentPercentOfDailyCalorieNeed,
  } = numbers;

  if (!isAlternateContentShown) {
    return (
      <div
        className="calories-chart-content"
      >
        {currentCaloriesRemainder >= 0
          ? (
            <>
              <h1 className="calories-headline">You still need to consume</h1>
              <p className="calories-number">{Number.isNaN(currentCaloriesRemainder) ? '' : currentCaloriesRemainder}</p>
              <h2 className="calories-subheadline">calories to fit your daily need</h2>
            </>
          )
          : (
            <>
              <h1 className="calories-headline">Today you have consumed</h1>
              <p className="calories-number" style={{ color: 'red' }}>{Number.isNaN(Math.abs(currentCaloriesRemainder)) ? '' : Math.abs(currentCaloriesRemainder)}</p>
              <h2 className="calories-subheadline">calories more than your daily need</h2>
            </>
          )}
      </div>
    );
  }
  return (
    <div
      className="alternative-calories-chart-content"
    >
      <p className="alternative-calories-chart-content-headline">calories:</p>
      <p className="alternative-calories-chart-content-number">
        {currentCalories}
        /
        {dailyCalorieNeed}
      </p>
      <p className="alternative-calories-chart-content-percent">
        {currentPercentOfDailyCalorieNeed}
        %
      </p>
    </div>
  );
};

CaloriesChartContent.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
  isAlternateContentShown: PropTypes.bool.isRequired,
};

export default CaloriesChartContent;
