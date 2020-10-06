import React, { useState, useRef, useLayoutEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import CaloriesChartContent from '../CaloriesChartContent';

const CaloriesChart = ({
  numbers,
  isAlternateContentShown,
  toggleAlternateContent,
}) => {
  const {
    percentageOfProteinsInDailyCalorieNeed,
    percentageOfFatsInDailyCalorieNeed,
    percentageOfCarbsInDailyCalorieNeed,
    percentageOfCaloriesRemainderInDailyCalorieNeed,
    percentageOfEmptyCaloriesInDailyCalorieNeed,
  } = numbers;
  const data = {
    labels: ['Proteins', 'Fats', 'Carbs', 'Empty Calories', 'Still need to consume'],
    datasets: [{
      data: [
        percentageOfProteinsInDailyCalorieNeed,
        percentageOfFatsInDailyCalorieNeed,
        percentageOfCarbsInDailyCalorieNeed,
        percentageOfEmptyCaloriesInDailyCalorieNeed,
        percentageOfCaloriesRemainderInDailyCalorieNeed,
      ],

      backgroundColor: [
        '#109618',
        '#ff9900',
        '#990099',
        '#fff',
        '#f2f2f2',
      ],
      borderColor: '#000',
      borderWidth: 1,
    }],
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: {
      display: false,
    },
    tooltips: {
      position: 'nearest',
      titleFontFamily: 'Montserrat, sans-serif',
      bodyFontFamily: 'Montserrat, sans-serif',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      displayColors: false,
      callbacks: {
        title(tooltipItem, _data) {
          return _data.labels[tooltipItem[0].index];
        },
        label(tooltipItem, _data) {
          const dataset = _data.datasets[0];
          const { total } = Object.values(dataset._meta)[0];
          const percent = Math.round(
            (dataset.data[tooltipItem.index] / total) * 100,
          );
          return `${percent}% of total calorie intake`;
        },
      },
    },
  };

  const chartRef = useRef(null);
  const [innerSize, setInnerSize] = useState(-1);

  const setSize = () => {
    if (chartRef.current) {
      const newInnerSize = Number(
        window
          .getComputedStyle(chartRef.current)
          .height
          .slice(0, -2),
      );
      setInnerSize(newInnerSize);
    }
  };

  useLayoutEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, [innerSize]);

  const handleKeyDown = (e) => {
    const code = e.charCode || e.keyCode;
    if ((code === 32) || (code === 13)) {
      toggleAlternateContent();
    }
  };

  return (
    <article
      className="calories-container"
      ref={chartRef}
      onClick={toggleAlternateContent}
      onKeyDown={(e) => { handleKeyDown(e); }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="switch"
      aria-checked="false"
      tabIndex="0"
    >
      <Doughnut
        className="calories-chart"
        data={data}
        options={options}
      />
      <div
        className="calories-chart-inner"
        style={{
          width: innerSize,
          height: innerSize,
        }}
      >
        <CaloriesChartContent
          numbers={numbers}
          isAlternateContentShown={isAlternateContentShown}
          toggleAlternateContent={toggleAlternateContent}
        />
      </div>
    </article>
  );
};

CaloriesChart.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
  isAlternateContentShown: PropTypes.bool.isRequired,
  toggleAlternateContent: PropTypes.func.isRequired,
};

export default CaloriesChart;
