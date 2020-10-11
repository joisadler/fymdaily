import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const SearchIngredientModal = ({
  isModalOpen,
  closeModal,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Create recipe"
      className="create-custom-recipe"
    >
      <button
        className="create-custom-recipe-close-button"
        type="button"
        onClick={e => closeModal(e)}
        title="Close"
      >
        &times;
      </button>
      <h2 className="create-custom-recipe-header">
        Search Ingredient
      </h2>
    </Modal>
  );
};

SearchIngredientModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SearchIngredientModal;
