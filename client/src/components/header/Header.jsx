import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button, Container, Tooltip, ListItem, styled } from '@mui/material';
import CustomButton from './CustomButton';

function Header() {

   return (
      <div>
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     variant="h6"
                  >
                     EVENTMANIA
                  </Typography>
                  <CustomButton />



               </Toolbar>
            </Container>
         </AppBar>
      </div>
   )
};


export default Header;