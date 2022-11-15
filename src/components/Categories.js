/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.category);

  const btn_Status = () => {
    dispatch(checkStatus())
  }

  return (
    <div className='category' >
     <button type='button' className='statusBtn' onClick={btn_Status}>Check status</button>
     <p className='boot'>{text}</p>
    </div>
  )
}

export default Category;