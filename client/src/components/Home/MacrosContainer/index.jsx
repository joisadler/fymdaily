import React from 'react';
import PropTypes from 'prop-types';
import MacrosLine from '../MacrosLine';

const MacrosContainer = ({ numbers }) => (
  <section className="macros-container">
    <MacrosLine numbers={numbers} nutrient="protein" />
    <MacrosLine numbers={numbers} nutrient="fat" />
    <MacrosLine numbers={numbers} nutrient="carb" />
  </section>
);

MacrosContainer.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default MacrosContainer;
