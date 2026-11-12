class ApiResponse {  //Yahan hum ApiResponse naam ki class create kar rahe hain
    constructor(statusCode, data, message = "success"){  // Constructor ek special method hai jo automatically execute hota hai jab hum class ka object create karte hain.
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }

}
 export {ApiResponse}

// Iska main purpose hai ki hum apne backend se frontend ko ek standard format mein response bhej sakein.