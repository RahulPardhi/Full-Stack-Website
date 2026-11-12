 const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res, next)).catch((err) => next(err))
    }

 }


export {asyncHandler}



/* Asynchronous functions mein aane wale errors ko
 automatically handle karna, taaki har API ke andar baar-baar try-catch likhne ki zarurat na pade.

 const asyncHandler = (requestHandler) => {
 
  Yahan hum asyncHandler naam ka function create kar rahe hain.
- asyncHandler = Function ka naam.
- requestHandler = Ek doosra function jo argument ke roop mein receive hota hai.*/

// both are same 




//const asyncHandler = () => {}
//const asyncHandler = (func) => () {}
//const asyncHandler = (func) => async () => {}


    
/* const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)

    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
} */