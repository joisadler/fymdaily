import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../actions/UserActions';

export default () => {
  const user = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [user._id, dispatch]);
  return user;
};
