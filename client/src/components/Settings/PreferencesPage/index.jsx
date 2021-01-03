import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useAsyncCallback } from 'react-async-hook';
// import { updateUser } from '../../../actions/UserActions';
import useLoadUser from '../../../hooks/useLoadUser';
import Navbar from '../../Navigation/Navbar';

const PreferencesPage = () => {
  const user = useLoadUser();
  const currentShowOnlyFoodsCreatedByUser =
    user.showOnlyFoodsCreatedByUser || false;
  const [showOnlyFoodsCreatedByUser, setShowOnlyFoodsCreatedByUser] = useState(
    currentShowOnlyFoodsCreatedByUser
  );
  // console.log(showOnlyFoodsCreatedByUser);
  useEffect(() => {
    setShowOnlyFoodsCreatedByUser(currentShowOnlyFoodsCreatedByUser);
  }, [currentShowOnlyFoodsCreatedByUser]);

  return (
    <>
      <main className="page">Preferences Page</main>
      <Navbar />
    </>
  );
};

export default PreferencesPage;
