import React, { useState, useContext, useEffect } from 'react'
import { Badge, Box, Button, Typography, styled } from '@mui/material'
import Profile from './Profile';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import LoginDialog from '../login/LoginDialog';


const Wrapper = styled(Box)(({ theme }) => ({
   margin: '0 10% 0 auto',
   display: 'flex',
   '& > *': {
      marginRight: '40px !important',
      fontSize: 16,
      alignItems: 'center',
   },
   [theme.breakpoints.down('sm')]: {
      display: 'block'
   }
}));

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #fff;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
    height : 30px
`

function CustomButton() {

   const [open, setOpen] = useState(false);
   const [account, setAccount] = useState(false)

   const openDialog = () => {
      setOpen(true);
   }

   return (
      <Wrapper>
         <Router>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="dashboard">Dashboard</Link>
            {
               account ? <Profile account={account} setAccount={setAccount} />
                  : <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>
            }
            <LoginDialog open={open} setOpen={setOpen} />
         </Router>
      </Wrapper>
   )
}

export default CustomButton