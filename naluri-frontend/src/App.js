import { useState, useEffect } from 'react';
import logo from './logo.svg';
import sun from './assets/sun.png';
import stars from './assets/stars.png';
import { 
  Box,
  Grid,
  Card,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getData } from './components/dataProvider';
import './App.css';

const NALURI_API_URL = 'http://localhost:3010/naluri/v1';

const Background = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#282c34',
  backgroundImage: `url(${stars})`,
  padding: theme.spacing(3),
  rowGap: theme.spacing(5),
})
);
const Information = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 200,
  backgroundColor: '#101010',
  padding: theme.spacing(3),
  boxShadow: 4,
  shadowColor: '#000',
  justifyContent: 'center',
})
);
const Sun = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${sun})`,
  height: '50vmin',
  width: '50vmin',
  animation: 'spin 20s linear infinite',
}));

function App() {
  const [data, setData] = useState({
    pi: '',
    circumference: '',
  });
  useEffect(() => {
    getData(setData);
  }, []);
  return (
    <Background>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom color="white">
          The Sun
        </Typography>
      </Box>
      <Box sx={{  textAlign: 'center'  }}>
        <img src={sun} className="sun" alt="logo" />
      </Box>
      {/* <Sun /> */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }} >
        <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: 'row' }}>
          <Information>
            <Typography variant="h5" component="h2" gutterBottom color='gray'>
              Value of PI :
              {' '}
              {data.pi}
            </Typography>
          </Information>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Information>
            <Typography variant="h5" component="h2" gutterBottom color='gray'>
              Circumference of the sun :
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom color='gray'>
              {data.circumference}
            </Typography>
          </Information>
        </Grid>
      </Grid>
      <div></div>
    </Background>
  );
}

export default App;
