import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.category);

  const btnStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="category">
      <button type="button" className="statusBtn" onClick={btnStatus}>Check status</button>
      <p className="boot">{text}</p>
    </div>
  );
};

export default Category;
