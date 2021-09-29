import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { ImageStateP } from '../State/State'
import { Box } from '@mui/system'
import { Container, Paper, Typography } from '@mui/material'
import { updateHiredWorkers, removeWorker } from '../Actions/Actions'
import WorkerCard from './WorkerCard'

export interface WorkersIndividual {
     name: string,
     image: string,
}

export interface LibraryProps {
     workers: any[] ,
     isLoading: boolean,
     error: string,
     hiredWorkers: [],
     removedWorkers: []
}

const Library = ({ workers, isLoading, error, hiredWorkers, removedWorkers}: LibraryProps) => {

     const dispatch = useDispatch()

     const swiped = (direction: string, workerName: string) => {
          dispatch(removeWorker(workerName))
          if(direction === 'right') {
               dispatch(updateHiredWorkers(workerName))
          }
     }

     const renderHiredWorkers = hiredWorkers.map((worker, index) => {
          return (
               <Typography key={index} sx={{m:1, fontSize: '12px'}}>{worker}</Typography>
          )
     })

     const renderWorkers = !isLoading && workers.map( (worker, index) => {
          return ( 
               <WorkerCard
                    key={index}
                    index={index}
                    worker={worker}
                    swiped={swiped}
               />
          )
     })

     const renderWorkerFinished = (
          <Box sx={{mt: 5}}>
               <Typography variant='h4' component='h4' sx={{fontVariantCaps: 'all-small-caps'}}>No More Workers</Typography>
          </Box>
     )


     if(!isLoading && error) {
          return (
               <React.Fragment>
                    <Box style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                         <Typography sx={{fontVariantCaps: 'all-petite-caps', mt: 4}} variant='h2' component='h1'>Pexel Film Cast</Typography>
                         <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '100%'}}>
                              <Typography sx={{fontVariantCaps: 'all-petite-caps', mt: 1, textAlign: 'center'}} variant='h3' component='h3'>{error}</Typography>
                         </Box>
                    </Box>
               </React.Fragment>
          )
     }
     if(isLoading) {
          return (
               <React.Fragment>
                    <Box style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                         <Typography sx={{fontVariantCaps: 'all-petite-caps', mt: 4}} variant='h2' component='h1'>Pexel Film Cast</Typography>
                         <Box sx={{display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '100%'}}>
                              <Typography sx={{fontVariantCaps: 'all-petite-caps', mt: 1}} variant='h3' component='h3'>Loading...</Typography>
                         </Box>
                    </Box>
               </React.Fragment>
          )
     }

     return (
          <Container maxWidth="sm">
               <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Typography sx={{fontVariantCaps: 'all-petite-caps', mt: 4}} variant='h2' component='h1'>Pexel Film Cast</Typography>
                    <Box sx={{width: '100%', display: 'flex', flexFlow: 'column', alignItems:'center', justifyContent: 'space-between', height: '100%', mt: 5, pb: 1}}>
                         { removedWorkers.length === workers.length ? renderWorkerFinished : (
                              <React.Fragment>
                                   {renderWorkers}
                                   <Box sx={{mt: 35}} >
                                        <Typography sx={{fontVariantCaps: 'all-petite-caps'}} variant='h5' component='h5' >{`<--- Swipe Left To Fire  |  Swipe Right To Hire --->`}</Typography>
                                   </Box>
                              </React.Fragment>
                         ) }
                    </Box>
                    { hiredWorkers.length > 0 &&
                         <Paper elevation={1} sx={{p: 1, position: 'static', height: 300, mb: 4, width: '100%'}}  >
                              <Typography align='center' >Hired:</Typography>
                              <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'baseline', height: 150 , overflow: 'scroll'}}>
                                   {renderHiredWorkers}
                              </Box>
                         </Paper>
                    }
               </Box>
          </Container>
     )
}

const mapStateToProps = (state: ImageStateP ) => ({workers: state.getImages.workers, isLoading: state.getImages.isLoading, error: state.getImages.error, hiredWorkers: state.updateWorkers.hiredWorkers, removedWorkers: state.updateWorkers.removedWorkers })

export default connect(mapStateToProps, null)(Library)