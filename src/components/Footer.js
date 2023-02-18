import React from 'react';
import { Box, Stack , Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="fff3f4" display="flex" alignItems="center" justifyContent="center">
      <Stack gap="40px" alignItems="centre" px="40px" pt="24px">
            <img src={Logo} alt="logo" width="200px" height="40px"/>
            <Typography variant="h5" pb="40px" mt="20px" justifyContent="center">
                Made with ❤️ by Vivek Kumar
            </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
