


function errorsHandler(err,req,res,next){
    res.status(500)
    res.json({
        error: true,
        message: "error message"
    })
}

module.exports = errorsHandler;