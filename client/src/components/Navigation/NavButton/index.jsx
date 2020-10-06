import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuActions from '../../../actions/SettingsMenuActions';
import CreateCustomFoodModal from '../../CustomFood/CreateCustomFoodModal';

const NavButton = ({ to, icon }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isCreateFoodModalOpen, setIsCreateFoodModalOpen] = useState(false);

  const openCreateFoodModal = () => {
    setIsCreateFoodModalOpen(true);
  };

  const closeCreateFoodModal = (e) => {
    if (e) e.stopPropagation();
    setIsCreateFoodModalOpen(false);
  };

  const handleClick = () => {
    if (to === '/menu') {
      return dispatch(MenuActions.toggleMenu());
    }
    if (to === '/create-custom-food') {
      return openCreateFoodModal();
    }
    dispatch(MenuActions.hideMenu());
    history.push(to);
  };
  return (
    <>
      <button
        type="button"
        className="nav-button"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={icon} className="nav-button-icon" />
      </button>
      {isCreateFoodModalOpen && (
        <CreateCustomFoodModal
          isModalOpen={isCreateFoodModalOpen}
          closeModal={closeCreateFoodModal}
        />
      )}
    </>
  );
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavButton;
