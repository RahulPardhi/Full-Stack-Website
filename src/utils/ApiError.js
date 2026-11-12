class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
 //optional
        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}


/* ApiError ka use tab hota hai jab backend mein koi error aata hai, jaise:
- User not found.
- Invalid password.
- Email already exists.
- Database connection failed.
- Unauthorized access. 
*/