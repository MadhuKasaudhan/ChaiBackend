const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((ree) => next(err))
    }
}


export {asyncHandler}



/*const asyncHandler = (fn) => (req, res, next) => {
    try{
        await fn(req, res, next)
    }catch(error){
        res.status(err.code || 500).jason({
            success: false,
            message: err.mesaaage
        })
    }
}
*/