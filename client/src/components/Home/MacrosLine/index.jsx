import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const MacrosLine = ({ numbers, nutrient }) => {
  const Nutrient = `${nutrient[0].toUpperCase()}${nutrient.slice(1)}`;
  const percent = numbers[`currentPercentOfDaily${Nutrient}Need`];

  return (
    <div className="macros-line">
      <div className={`macros-image-container ${nutrient}-image-container`} />
      <div
        className="macros-progress-bar"
        data-tip
        data-for={`${nutrient}-tip`}
      >
        <ReactTooltip
          id={`${nutrient}-tip`}
          aria-haspopup="true"
          place="top"
          type="dark"
          effect="float"
        >
          <h2 className="tooltip-title">
            {`${Nutrient}s`}
          </h2>
          <p className="tooltip-text">
            {`${percent}% of daily ${nutrient} need`}
          </p>
        </ReactTooltip>
        <div className={`percent-container ${nutrient}-percent-container`}>
          {percent}
          %
        </div>
        <div
          className={`macros-progress-bar-inner ${nutrient}-progress-bar-inner`}
          style={{ width: `${percent > 100 ? 100 : percent}%` }}
        />
      </div>
    </div>
  );
};

MacrosLine.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
  nutrient: PropTypes.string.isRequired,
};

export default MacrosLine;
