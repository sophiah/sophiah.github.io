import Box from '@mui/material/Box';
import { styled, createTheme } from '@mui/system';

export const globalTheme = createTheme({
  palette: {
    primary: {
      orangeHB: '#FBE0C3',
      orangeHF: '#000'
    }
  },
  typography: {
    pageHeader: {
      fontSize: 'x-large',
      fontWeight: 'bolder',
      lineHeight: 1.57,
      letterSpacing: '-0.05px', 
    },
  },
});

export const PageContainerComponent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  padding: theme.spacing(0),
}));

export const PageHeaderDiv = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  paddingLeft: theme.spacing(0),
  top: 0, 
  left: 0, 
  width: '100%',
  height: '120px',
  position: "fixed",
}));



