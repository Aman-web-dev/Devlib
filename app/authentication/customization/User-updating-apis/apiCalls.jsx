import { Axios } from "axios"
import axios from 'axios'

export const getImageFromUserTable=async(object,url,callback)=>{
        try {
          console.log(object)
            const response = await axios.get(url,
            {params:
              object
            });
            console.log("response:",response)
            callback(response) 
            return response
        } catch (error) {
            console.log("error during fetching data: ", error);
            return error
        }
}

