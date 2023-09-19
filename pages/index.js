// pages/index.js

import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const Home = () => {
  return (
    <Box display="flex"
    flexDirection="column">
      <Sidebar />
      <Box  className='container2'>
      <Header />
      <Content />
      </Box>
    </Box>
  );
};

export default Home;
