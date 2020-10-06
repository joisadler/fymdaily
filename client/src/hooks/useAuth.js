import { useDispatch } from 'react-redux';

export default (func) => {
  const dispatch = useDispatch();
  return (userCreds, isRememberMeChecked) => {
    dispatch(func(userCreds, isRememberMeChecked));
  };
};
