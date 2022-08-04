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
  rowGap: theme.spacing(5),
})
);
const Information = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 200,
  backgroundColor: '#181818',
  padding: theme.spacing(3),
  boxShadow: 4,
  shadowColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
})
);

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
      <Grid container spacing={2} sx={{ justifyContent: 'center', paddingTop: 2 }} >
        <Grid item xs={12} sm={12} md={6} lg={4}  >
          <Box sx={{ boxShadow: 10 }}>
            <Information>
              <Typography variant="h5" component="h2" gutterBottom color='gray'>
                Value of PI :
                {'  '}
                {data.pi ? data.pi : 0.0}
              </Typography>
            </Information>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} >
          <Box sx={{ boxShadow: 10 }}>
            <Information>
              <Typography variant="h5" component="h2" gutterBottom color='gray'>
                Circumference of the sun :
                {' '}
                {data.circumference ? data.circumference : 0}
                {' '}
                km
              </Typography>
            </Information>
          </Box>
        </Grid>
      </Grid>
    </Background>
  );
}

export default App;
