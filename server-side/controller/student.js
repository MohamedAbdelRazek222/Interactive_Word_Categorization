
const TestData = require('../DB/TestData.json');
const { generateRandomWords, calculateRank } = require('../utilities/studentCalc');

// getWords---------------
exports.getWords=(req,res)=>{
try{

    const wordsList = TestData.wordList;
    const randomWords = generateRandomWords(wordsList, 10);

   res.status(200).json({
    status:'success',
    data:{
        randomWords
    }
   })
}catch(e){
res.status(400).json({
status:'error',
message:'error in getWords'

})

}

}
// getRank---------------

exports.getRank = (req, res) => {
    try {
      const score = req.body.score;
      const rank = calculateRank(TestData.scoresList, score);
      res.status(201).json({
        status: 'success',
        data: {
          rank,
        },
      });
    } catch (e) {
      console.error('Error in getRank:', e);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };