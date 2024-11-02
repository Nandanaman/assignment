import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div class='nav'>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h5'>Product App</Typography>
                <Link to='/h'>
                <Button variant='contained' class='b1'>Home</Button>
                </Link>
                <Link to='/p'>
                <Button variant='contained' class='b2'>Add product</Button>
                </Link>
                
            </Toolbar>
            
        </AppBar>
        <h1>welcome to Product App</h1>
        
        
        <br/><br/>

    </div>
  )
}

export default Navbar