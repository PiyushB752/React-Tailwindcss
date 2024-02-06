import { AppBar, Toolbar, Typography, Button, Box, Card, CardContent, CardMedia} from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position='static' className='navBar' style={{backgroundColor:'#e67974'}}>
        <Toolbar className='options'>
          <Typography variant='h6'>Kalvium</Typography>
          <Typography color={'#cde0cb'}>About us</Typography>
          <Typography color={'#cde0cb'}>Contacts</Typography>
          <Typography color={'#cde0cb'}>Courses</Typography>
          <div className='login'>
          <Button variant='outlined' style={{color:'white'}}>Login</Button>
          </div>
        </Toolbar>
      </AppBar><br />
      <div className='btn1'>
      <Button style={{backgroundColor:'#4e81ee',color:'white'}}>Button One</Button>
      </div>
      
      <br /><br />
      <div className="alert">
        <p><b>Alert!</b> This is awesome!</p>
      </div>
      <div className='card'>
      <div >
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"/>
        </div>
        <div>
          <Box width="250px">
            <Card>
              <CardContent>
                <Typography variant='h5' >Kalvium Store</Typography>
                <Typography varient='h6'> You have a new Course!</Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
      <div className="bottom">
        <p>©2021 Copyright:<b>Kalvium</b></p>
      </div>
    </div>
  );
}

export default App;
