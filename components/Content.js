import { Box } from '@chakra-ui/react'
import React from 'react'

const Content = () => {
  return (  
<Box className="content">
                <Box id="content1"
                background-color= "rgb(40, 50, 238)"
                height= "206px"
                borderRadius= "14px"
                >content1</Box>
                <Box id="content2">
                    <Box id="todolist">todolist</Box>
                    <Box id="onprogress">onprogress</Box>
                    <Box id="done">done</Box>
                    <Box id="revised">revised</Box>
                </Box>
            </Box>
  )
}

export default Content
