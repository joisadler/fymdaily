import { useDispatch } from 'react-redux';

export default (func) => {
  const dispatch = useDispatch();
  return (userCreds) => {
    dispatch(func(userCreds));
  };
};
