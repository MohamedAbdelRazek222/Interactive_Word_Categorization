import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPractice } from '../store/slices/wordsSlice';
import { fetchRank } from '../store/thunks/fetchRank';

const RankScreen = ({totalScore, progress, onTryAgain }) => {
  const dispatch = useDispatch();
  const rank = useSelector((state) => state.rank);

  //  dispatch the resetPractice action to reset the state
  useEffect(() => {
    dispatch(resetPractice());
    const score = totalScore 

    // Dispatch the fetchRank async thunk to fetch the rank and update the store
    dispatch(fetchRank(score));
  }, [dispatch, progress]);

  const handleTryAgain = () => {
    onTryAgain(); // Call the onTryAgain function passed from the parent component
  };


  return (
    <div className="tryAgain">
      <h2 className="practiceCompleted">Practice Completed!</h2>
      {rank !== null && <p className="rank">Your Rank: {rank}%</p>}
      <div className="tryAgainButton">

      <button onClick={handleTryAgain} className="">Try Again</button>
      </div>
    </div>
  );
};

export default RankScreen;
