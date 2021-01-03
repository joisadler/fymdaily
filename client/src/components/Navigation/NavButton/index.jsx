import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuActions from '../../../actions/SettingsMenuActions';
import CreateCustomFoodModal from '../../Custom/CreateCustomFoodModal';
import CreateCustomRecipeModal from '../../Custom/CreateCustomRecipeModal';

const NavButton = ({ to, icon, labelText }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isCreateFoodModalOpen, setIsCreateFoodModalOpen] = useState(false);
  const [isCreateRecipeModalOpen, setIsCreateRecipeModalOpen] = useState(false);

  const openCreateFoodModal = () => {
    setIsCreateFoodModalOpen(true);
  };

  const openCreateRecipeModal = () => {
    setIsCreateRecipeModalOpen(true);
  };

  const closeCreateFoodModal = (e) => {
    if (e) e.stopPropagation();
    setIsCreateFoodModalOpen(false);
  };

  const closeCreateRecipeModal = (e) => {
    if (e) e.stopPropagation();
    setIsCreateRecipeModalOpen(false);
  };

  const handleClick = () => {
    if (to === '/menu') {
      return dispatch(MenuActions.toggleMenu());
    }
    if (to === '/create-custom-food') {
      return openCreateFoodModal();
    }
    if (to === '/create-custom-recipe') {
      return openCreateRecipeModal();
    }
    dispatch(MenuActions.hideMenu());
    history.push(to);
  };
  return (
    <div className="nav-button-container">
      <button
        type="button"
        aria-label={labelText}
        title={labelText}
        className="nav-button"
        onClick={handleClick}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={icon} className="nav-button-icon" />
      </button>
      {isCreateFoodModalOpen && (
        <CreateCustomFoodModal
          isModalOpen={isCreateFoodModalOpen}
          closeModal={closeCreateFoodModal}
        />
      )}
      {isCreateRecipeModalOpen && (
        <CreateCustomRecipeModal
          isModalOpen={isCreateRecipeModalOpen}
          closeModal={closeCreateRecipeModal}
        />
      )}
    </div>
  );
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
};

export default NavButton;
