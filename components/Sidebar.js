import { Box, List, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { CalendarIcon, ChatIcon, EmailIcon, HamburgerIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  return (
       <Box id="container" 
         display= "flex"
    flex-direction= "column"
    align-items= "center"
    width= "242px"
    height= "1241px"
    filter= "drop-shadow(17.539px 4.049px 17.5px rgba(0, 0, 0, 0.15))"
    background-color= "#15132b"
    position= "fixed"
    left= "0"
    top= "0" >
        <Box className="sidebar">
       <Box id="header"
       bgColor="#15132b"><Text>weframetech 
        <HamburgerIcon /> </Text>
        
       </Box>
       <Box id="menus">
        <Text 
        paddingBottom="20px">MAIN MENU</Text>
        <List display="grid"
        gridTemplateRows="1fr 1fr 1fr 1fr 1fr"
        gridRowGap="50"
        paddingBottom="70px">
  <ListItem><EmailIcon  /> Email</ListItem>
  <ListItem><ChatIcon />Chat</ListItem>
  <ListItem><CalendarIcon />Calender</ListItem>
  <ListItem><InfoIcon />Info</ListItem>
  <ListItem><SettingsIcon />Settings</ListItem>
</List>
       </Box>
       <Box id="banner">
     </Box>
    </Box>
    </Box>
  )
}

export default Sidebar

