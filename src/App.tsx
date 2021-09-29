import React, {useEffect} from 'react'
import {useDispatch } from "react-redux";
import CastLibrary from './Components/CastLibrary'
import Background from './Assets/Images/bg.jpeg'
import { Container, CssBaseline } from '@mui/material';
import { getImages } from './Actions/Actions';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

  return (
      <Container maxWidth="sm" sx={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}} >
        <CssBaseline />
        <CastLibrary 
          workers={[]} 
          isLoading={true}
          error=''
          hiredWorkers={[]}
          removedWorkers={[]}
        />
      </Container> 
  );
}


export default App
