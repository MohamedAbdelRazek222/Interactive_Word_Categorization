import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankScreen from './RankScreen';
import { fetchWords } from '../store';
import { nextWord, selectOption } from '../store/slices/wordsSlice';

import logo from '../assets/logo.jpg'


const PracticeScreen = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const currentWordIndex = useSelector((state) => state.currentWordIndex);
  const selectedOption = useSelector((state) => state.selectedOption);
  const correctAnswer = useSelector((state) => state.correctAnswer);
  const progress = useSelector((state) => state.progress);
  const [currentScreen, setCurrentScreen] = useState('practice');
  const [totalScore, setTotalScore] = useState(0); 
  const [answerSelected, setAnswerSelected] = useState(false); 


  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  const handleOptionSelect = (option) => {
    if (!answerSelected) {
      dispatch(selectOption(option));
      setAnswerSelected(true); // Set answerSelected to true to disable further button clicks
  
      // Get the current word's part of speech
      const currentWord = words[currentWordIndex];
      const wordPos = currentWord?.pos;
  
      // Check if the selected option matches the word's part of speech
      const isCorrectAnswer = option === wordPos;
  
      // If the answer is correct, increment the total score by 10
      if (isCorrectAnswer) {
        setTotalScore((prevScore) => prevScore + 10);
      }
  
      // Wait for 1.5 second before moving to the next word
      setTimeout(() => {
        dispatch(nextWord());
        setAnswerSelected(false); 
      }, 1500);
    }
  };
  


  // Reset the practice and fetch new words
  const handleTryAgain = () => {
    dispatch(fetchWords());
    setCurrentScreen('practice');
  };

  useEffect(() => {
    if (progress === 100) {
      setCurrentScreen('rank');
    }
  }, [progress]);

  return (
    <>
        <section>
          <div className="curve"></div>

    <div className=" logo  ">
  <img src={logo} alt="logo"  className="w-80 " />
</div>
<div className="all">


         {/* Render the Practice screen */}
         <div className="content">

         {currentScreen === 'practice' && (
           < >
             <p className="question">Word: {words[currentWordIndex]?.word}</p>
             <button onClick={() => handleOptionSelect('noun')} disabled={answerSelected}>
               Noun
             </button>
             <button onClick={() => handleOptionSelect('adjective')} disabled={answerSelected}>
               Adjective
             </button>
             <button onClick={() => handleOptionSelect('adverb')} disabled={answerSelected}>
               Adverb
             </button>
             <button onClick={() => handleOptionSelect('verb')} disabled={answerSelected}>
               Verb
             </button>
             {/* Display feedback for the selected option */}
             {selectedOption !== null && (
               <p className="answerResult">
                 {correctAnswer ? 'Correct 😁' : 'Incorrect🥲 '}
               </p>
             )}
             {/* Display progress bar */}
             <progress value={progress} max="100"  className='progress'/>
             {/* Render Next button */}
             {/* {selectedOption !== null && (
               <button onClick={handleNextWord} disabled={answerSelected}>
                 {currentWordIndex < words.length - 1 ? 'Next Word' : 'Finish'}
               </button>
             )} */}
           </>
         )}
                  </div>
                  </div>
         {currentScreen === 'rank' && (
           <RankScreen totalScore={totalScore} progress={progress} onTryAgain={handleTryAgain} />
         )}
             </section>

       </> 
  );
};

export default PracticeScreen;
7