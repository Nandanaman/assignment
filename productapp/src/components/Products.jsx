import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Products = () => {
  return (
    <div>
        <h2>Do you want to add product?</h2>
        <TextField variant='outlined'  label='product name'/><br/><br/>
        <TextField variant='outlined'   label='description'/><br/><br/>
        <TextField variant='outlined'   label='price'/><br/><br/>
        <TextField variant='outlined'     label='category'/><br/><br/>
        <Button variant='contained'>submit</Button>


    </div>
  )
}

export default Products