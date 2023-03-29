import axios from "axios"


export const login = async (userInfo)=>{

    const BASE_URL="http://12126.fullstack.clarusway.com/"

try{
   const {data}= await axios.post(BASE_URL,userInfo)
} catch (error) {
    console.log(error)
}

}