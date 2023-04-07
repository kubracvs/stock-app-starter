import { Button, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"

import useStockCall from "../Hooks/useStockCall"
import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import ProductModal from "../components/modals/ProductModal"
import { flex } from "../styles/globalStyle"


const Products = () => {


const {getStockData} = useStockCall()
const {products} = useSelector((state)=> state.stock)
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [info,setInfo] =useState({
  name:"",
  phone:"",
  address:"",
  image:"",
})




  useEffect(() => {
  
   getStockData("products")
  }, [])

 

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
       products
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New product
      </Button>
      <ProductModal 
      open={open} 
      handleClose={handleClose} 
      info={info} 
      setInfo={setInfo}/>

      <Grid container sx={flex}>

      {products?.map((product)=>(

      <Grid item key={product.id}>
    
      <ProductCard product={product} setOpen={setOpen} setInfo={setInfo}/>

      </Grid>
      ))}
      </Grid>

  
   
    </div>
  )
}

export default Products