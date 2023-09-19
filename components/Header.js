// components/Header.js

import { BellIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
const Header = () => {
  const notificationCount = 12;
  return (
    <Box p={4} bg="blue.500" color="white" >
        <Box 
         width= "100%"
    height= "65px"
    display= "grid"
    grid-template-columns= "1fr fr 1fr 1fr 1fr"
    gap= "90px"
    background-color= "hsl(8, 86%, 50%)">  <Box className="nav">
            <Input backgroundColor= "#6418c3" id="searchbox" type="text" placeholder="Search here" />
            <Box id="other">
                <Text color= "#6418c3">other menus</Text>
            </Box>

                <Box id="icons">
                      <BellIcon style={{ cursor: 'pointer' }} color="#6418c3" />
      {notificationCount > 0 && <Badge colorScheme="red" fontSize="0.8em">{notificationCount}</Badge>}
                </Box>
                <Box id="group2" display="flex" alignItems="center">
      <Button background-color= "#211a75" width= "110px"  ml="2" borderRadius="25px"  style={{ cursor: 'pointer' }}>  <Image paddingRight="10px" width="25" height="25"  src="https://img.icons8.com/color/48/usa-circular.png" alt="usa-circular"/><Text paddingRight="10px">English <TriangleDownIcon /></Text> </Button>
    </Box>
                <Box id="profile">
                  <Box display="flex"
                flexDirection="row">
                  <Box Box display="flex"
                flexDirection="row">
        <Text >Instructor Day Super Admin</Text>
        <TriangleDownIcon />
        </Box>
      </Box>
                </Box>
            </Box>
    </Box>
    </Box>
  );
};

export default Header;
