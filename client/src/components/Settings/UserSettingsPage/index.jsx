/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncCallback } from 'react-async-hook';
import { loadUser, updateUser } from '../../../actions/UserActions';
import Navbar from '../../Navigation/Navbar';

const UserSettingsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(user._id));
  }, [user._id, dispatch]);

  const {
    _id,
    username,
  } = user;
  const currentHeight = user.height || '';
  const currentBodyWeight = user.bodyWeight || '';
  const currentGender = user.gender || 'male';
  const currentHipCircumference = user.hipCircumference || '';
  const currrentWaistCircumference = user.waistCircumference || '';
  const currentNeckCircumference = user.neckCircumference || '';
  const currentPhysicalActivityLevel = user.physicalActivityLevel || 'moderate';
  const currentGoal = user.goal || 'normalWeightLoss';
  const isUserInfoSet = user.height !== '';
  const [height, setHeight] = useState(currentHeight);
  const [bodyWeight, setBodyWeight] = useState(currentBodyWeight);
  const [gender, setGender] = useState(currentGender);
  const [hipCircumference, setHipCircumference] = useState(currentHipCircumference);
  const [waistCircumference, setWaistCircumference] = useState(currrentWaistCircumference);
  const [neckCircumference, setNeckCircumference] = useState(currentNeckCircumference);
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState(currentPhysicalActivityLevel);
  const [goal, setGoal] = useState(currentGoal);

  const set = (name) => {
    switch (name) {
      case 'height':
        return setHeight;
      case 'bodyWeight':
        return setBodyWeight;
      case 'gender':
        return setGender;
      case 'hipCircumference':
        return setHipCircumference;
      case 'waistCircumference':
        return setWaistCircumference;
      case 'neckCircumference':
        return setNeckCircumference;
      case 'physicalActivityLevel':
        return setPhysicalActivityLevel;
      case 'goal':
        return setGoal;
      default:
        break;
    }
  };

  const handleChange = ({ value, dataset }) => {
    const { name } = dataset;
    set(name)(value);
  };

  const saveUserSettings = useAsyncCallback(async () => {
    const updatedUser = {
      _id,
      username,
      height,
      bodyWeight,
      gender,
      hipCircumference,
      waistCircumference,
      neckCircumference,
      physicalActivityLevel,
      goal,
    };
    dispatch(updateUser(updatedUser));
  });

  const onSaveUserSettings = (e) => {
    e.preventDefault();
    saveUserSettings.execute();
  };

  return (
    <>
      <main className="page">
        <header>
          <h1 className="page-title">
            { isUserInfoSet ? `Hey, ${username}!` : `Welcome, ${username}!`}
          </h1>
          <h2 className="user-settings-page-subtitle">
            { isUserInfoSet
              ? 'We advise you to update this data at least once a month (this is important for the correct work with your weight):'
              : 'Please enter the following data (this is necessary for the application to work correctly):'}
          </h2>
        </header>
        <form
          className="user-settings-form"
          onSubmit={onSaveUserSettings}
        >
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-height-input"
              className="user-settings-input-label"
            >
              Height:*
            </label>
            <input
              type="number"
              id="user-settings-height-input"
              className="user-settings-input"
              placeholder="Number in cm"
              value={height}
              data-name="height"
              onChange={e => handleChange(e.target)}
              min="0"
              max="300"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-weight-input"
              className="user-settings-input-label"
            >
              Weight:*
            </label>
            <input
              type="number"
              id="user-settings-weight-input"
              className="user-settings-input"
              placeholder="Number in kg"
              value={bodyWeight}
              data-name="bodyWeight"
              onChange={e => handleChange(e.target)}
              min="0"
              max="500"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-gender-input"
              className="user-settings-input-label"
            >
              Gender:*
            </label>
            <select
              id="user-settings-gender-input"
              className="user-settings-input"
              value={gender}
              data-name="gender"
              onChange={e => handleChange(e.target)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="user-settings-input-container">
            { gender === 'female' && (
              <>
                <label
                  htmlFor="user-settings-hip-circumference-input"
                  className="user-settings-input-label"
                >
                  Hip Circumference:*
                </label>
                <input
                  type="number"
                  id="user-settings-hip-circumference-input"
                  className="user-settings-input"
                  placeholder="Number in cm"
                  value={hipCircumference}
                  data-name="hipCircumference"
                  onChange={e => handleChange(e.target)}
                  min="0"
                  max="500"
                  step="any"
                  required
                />
              </>
            )}
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-waist-circumference-input"
              className="user-settings-input-label"
            >
              Waist Circumference:*
            </label>
            <input
              type="number"
              id="user-settings-waist-circumference-input"
              className="user-settings-input"
              placeholder="Number in cm"
              value={waistCircumference}
              data-name="waistCircumference"
              onChange={e => handleChange(e.target)}
              min="0"
              max="300"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-neck-circumference-input"
              className="user-settings-input-label"
            >
              Neck Circumference:*
            </label>
            <input
              type="number"
              id="user-settings-neck-circumference-input"
              className="user-settings-input"
              placeholder="Number in cm"
              value={neckCircumference}
              data-name="neckCircumference"
              onChange={e => handleChange(e.target)}
              min="0"
              max="100"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-physical-activity-level-input"
              className="user-settings-input-label"
            >
              Physical Activity Level:*
            </label>
            <select
              id="user-settings-physical-activity-level-input"
              className="user-settings-input"
              value={physicalActivityLevel}
              data-name="physicalActivityLevel"
              onChange={e => handleChange(e.target)}
              required
            >
              <option value="veryLight">Very Light</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
              <option value="veryHeavy">Very Heavy</option>
            </select>
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-goal-input"
              className="user-settings-input-label"
            >
              Goal:*
            </label>
            <select
              id="user-settings-goal-input"
              className="user-settings-input"
              value={goal}
              data-name="goal"
              onChange={e => handleChange(e.target)}
              required
            >
              <option value="fastWeightLoss">Fast Weight Loss</option>
              <option value="normalWeightLoss">Normal Weight Loss</option>
              <option value="weightMaintenance">Weight Maintenance</option>
              <option value="massGain">Mass Gain</option>
            </select>
          </div>
          <button
            type="submit"
            className="user-settings-save-button"
          >
            Save
          </button>
        </form>
      </main>
      {isUserInfoSet && <Navbar />}
    </>
  );
};

export default UserSettingsPage;
