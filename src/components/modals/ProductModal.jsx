import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../styles/globalStyle';
import TextField  from '@mui/material/TextField';
import { useState } from 'react';
import {Button}  from "@mui/material"
import useStockCall from '../../Hooks/useStockCall';


export default function ProductModal({open,handleClose,info,setInfo}) {


  
  const {postStockData,putStockData} = useStockCall()

  const handleChange = (e) => {
    const {name,value} = e.target
    setInfo ({...info , [name]: value})
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      if(info.id){
        putStockData("products",info)
      } else {
        postStockData("products",info)
      }
      handleClose()
      setInfo({name: "", phone:"",address:"",image:""})
  }
  console.log(info)

  handleClose()
  setInfo({ name:"", phone:"", address:"",image:""})

  return (
    <div>
      
      <Modal
        open={open}
        onClose={()=>{
          handleClose()
          setInfo({ name:"", phone:"", address:"",image:""}) //bilgilerin sıfırlanması için oluştutduk
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        component = "form" onSubmit={handleSubmit}
        >
             <TextField
               label="Firm Name"
               name="name"
               id="name"
               type="text"
               variant="outlined"
               required
               value={info?.name}
               onChange={handleChange}
             /> 
                 <TextField
               label="Phone"
               name="phone"
               id="phone"
               type="tel"
               variant="outlined"
               required
               value={info?.phone}
               onChange={handleChange}
             /> 
                 <TextField
               label="Address"
               name="address"
               id="address"
               type="tel"
               variant="outlined"
               required
               value={info?.address}
               onChange={handleChange}
             /> 
                 <TextField
               label="Image"
               name="image"
               id="image"
               type="url"
               variant="outlined"
               value={info?.image}
               onChange={handleChange}
             /> 
             <Button type="submit" variant="contained">
              SUBMİT FİRM
             </Button>
              </Box>
        </Box>
      </Modal>
    </div>
  );
}