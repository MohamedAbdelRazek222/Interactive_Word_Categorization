const { getWords, getRank } = require('../controller/student');

const router=require('express').Router();


router.route('/words').get(getWords)
router.route('/ranks').post(getRank)


module.exports=router