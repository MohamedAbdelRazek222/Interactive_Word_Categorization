const { default: mongoose } = require("mongoose");

exports.connectDB=()=>{

return mongoose.connect(process.env.DB).then(()=>{

    console.log('connected DB .....');


}).catch(err=>{console.log('faild to connect')})

}
