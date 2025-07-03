


function EndpointNotFound(req,res,next){
    res.status(500),
    res.json({
        error: true,
        message: "endpoint not found"
    })
}

module.exports = EndpointNotFound;