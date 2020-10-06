import React from 'react';
import { useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

const Loader = () => {
  const isLoading = useSelector(state => state.system.isLoading);
  return (
    <div className="loader-container">
      <PulseLoader
        size={15}
        margin={2}
        color="green"
        loading={isLoading}
      />
    </div>
  );
};

export default Loader;
