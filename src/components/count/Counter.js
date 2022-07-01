import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  selectCount,
  deleteByAmount
} from '../../slice/counter/counterSlice';
import styles from '../../slice/counter/Counter.module.css';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteByAmount(incrementValue))}
        >
          delete Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;