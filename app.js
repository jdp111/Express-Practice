const express = require('express');
const app = express();
const {mean, median, mode} = require('./mymath')

//app.use(express.json);


app.use(express.urlencoded({"extended":true}))
app.get('/mean', function(req, res, next){
    const array = [...req.query.nums].filter(num => num !== ",");
    const nums = array.map((number) => {
        if (Number(number)){
            number = Number(number)
        }else{ return next({"message": "only number entries allowed", "status": "400"})}
        return number
    })

    const result = mean(nums)
    return res.send(`mean = ${result}`)//{"response": {"operation": "mean", "value": mean}}) 
})

app.use(express.urlencoded({"extended":true}))
app.get('/mode', function(req, res, next){
    const array = [...req.query.nums].filter(num => num !== ",");
    const nums = array.map((number) => {
        if (Number(number)){
            number = Number(number)
        }else{ return next({"message": "only number entries allowed", "status": "400"}) }
        return number
    })
    const result = mode(nums)
    return res.send(`mode= ${result}`)//{"response": {"operation": "mean", "value": mean}}) 
})


app.use(express.urlencoded({"extended":true}))
app.get('/median', function(req, res, next){
    const array = [...req.query.nums].filter(num => num !== ",");
    const nums = array.map((number) => {
        if (Number(number)){
            number = Number(number)
        }else{ return next({"message": "only number entries allowed", "status": "400"})}
        return number
    })

    result = median(nums);
    return res.send(`median= ${result}`)//{"response": {"operation": "mean", "value": mean}}) 
})



app.use(function(err,req,res,next){
    let status = err.status || 500;
    let message = err.message;
    return res.status(status).json({message,status})
})

app.listen(3000,function(){
    console.log('App open on port 3000');
})




