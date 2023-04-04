
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice"
import useAxios from "./useAxios"


const useStockCall = () => {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()

  const getStockData = async (url) => {
    // const BASE_URL = "https://12126.fullstack.clarusway.com/"
    dispatch(fetchStart())
 
    try {
    //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
    //     headers: { Authorization: `Token ${token}` },
    //   })

    const {data}= await axiosWithToken.get(`stock/${url}/`)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }

 const deleteStockData = async (url,id) => {
    // const BASE_URL = "https://12126.fullstack.clarusway.com/"
    dispatch(fetchStart())
 
    try {
        await axiosWithToken.delete(`stock/${url}/${id}`)
   
     getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }

  return {getStockData,deleteStockData}

}

export default useStockCall
