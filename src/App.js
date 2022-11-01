import React from "react";
import { 
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  InputBase
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50vw',
  },
}));

function App() {
  return (
    <>
      {/* <Box sx={{ display: 'flex' }}> */}
        <AppBar 
          component="nav"
          elevation={0}
          sx={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(17.5px)"
          }}>
          <Toolbar>
            <Box sx={{flexGrow: 1}}>
              <Box 
                component='img'
                src={require('./assets/images/MUGTUOSOICON.png')} 
                alt="icon" 
                sx={{
                  maxWidth: {
                    md: '10vw',
                    xs: '20vw'
                  },
                  height: 'auto',
                  flexGrow: 1,
                }} 
              />
            </Box>
            <Box 
              // sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <IconButton sx={{color: '#354259', mx: 4}}>
                <ShoppingBagOutlinedIcon />
              </IconButton>
              <Button startIcon={<MenuIcon />} sx={{color: '#354259'}}>
                Menu
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {/* <Box component="main" sx={{ p: 3 }}> */}
          {/* <Toolbar /> */}
          <Box 
            component='div'
            sx={{
              width: '100%',
              height: '100vh',
              background: `url('${require('./assets/images/1 1.png')}') no-repeat top center`,
              position: 'relative'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
          </Box>


          <Box sx={{height: '100vh', width: '100%', padding: {md: 15, xs: 5}}}>
            <Box sx={{bgcolor: '#C2DED1', width: '100%', height: '100%', borderRadius: '30px'}}>
              <Grid container sx={{padding: 5}} alignItems='center'>
                <Grid item xs={12} textAlign='center'>
                  <Box component='img' src={require('./assets/images/hi.png')} sx={{width: {lg: '15vw', md: '20vw'}}} />
                </Grid>
                <Grid item xs={12} textAlign='center' sx={{px: {lg: 15, md: 3, sm: 1}}}>
                  <Typography sx={{fontSize: {md: '32px', sm: '28px'}, fontWeight: '500', color: '#354259'}}>
                    Selamat datang, Mug Tuoso adalah home industry yang berfokus kepada custom mug dan menyediakan berbagai macam desing yang dapat anda pilih.
                    <br /><br />
                    Mulailah berkerasi dan nyatakan di Mug Tuoso
                    <br />
                    <Box component='span' sx={{color: '#EEBB4D'}}>
                      “Custom Your Mood”
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        {/* </Box> */}
      {/* </Box> */}
    </>
  );
}

export default App;
