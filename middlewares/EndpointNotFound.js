


function EndpointNotFound(req,res,next){
    res.status(404),
    res.json({
        error: true,
        message: "endpoint not found"
    })
}

module.exports = EndpointNotFound;