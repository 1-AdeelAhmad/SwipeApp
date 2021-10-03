import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import { Container, Paper, Typography } from '@mui/material';
import { ImageStateP } from '../State/State';
import { updateHiredWorkers, removeWorker } from '../Actions/Actions';
import WorkerCard from './WorkerCard';
import * as Styles from '../Styles/Styles';

export interface WorkersIndividual {
     name: string,
     image: string,
}

export interface LibraryProps {
     workers: [],
     isLoading: boolean,
     error: string,
     hiredWorkers: [],
     removedWorkers: []
}

const CastLibrary = ({
  workers, isLoading, error, hiredWorkers, removedWorkers,
}: LibraryProps) => {
  const dispatch = useDispatch();

  const swiped = (direction: string, workerName: string) => {
    dispatch(removeWorker(workerName));
    if (direction === 'right') {
      dispatch(updateHiredWorkers(workerName));
    }
  };

  const renderHiredWorkers = hiredWorkers.map((worker) => (
    <Typography key={worker} sx={Styles.hiredWorkersText}>{worker}</Typography>
  ));

  const renderWorkers = !isLoading && workers.map((worker:WorkersIndividual, index) => (
    <WorkerCard
      key={worker.image + 1}
      index={index}
      worker={worker}
      swiped={swiped}
    />
  ));

  const renderWorkerFinished = (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" component="h4" sx={Styles.text}>No More Workers</Typography>
    </Box>
  );

  if (!isLoading && error) {
    return (
      <>
        <Box style={Styles.boxContainer}>
          <Typography sx={Styles.pageTitle} variant="h2" component="h1">Pexel Film Cast</Typography>
          <Box sx={Styles.textContainer}>
            <Typography sx={Styles.text} variant="h3" component="h3">{error}</Typography>
          </Box>
        </Box>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Box style={Styles.boxContainer}>
          <Typography sx={Styles.pageTitle} variant="h2" component="h1">Pexel Film Cast</Typography>
          <Box sx={Styles.textContainer}>
            <Typography sx={Styles.text} variant="h3" component="h3">Loading...</Typography>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box style={Styles.boxContainer}>
        <Typography align="center" sx={Styles.pageTitle} variant="h2" component="h1">Pexel Film Cast</Typography>
        <Box sx={Styles.workers}>
          { removedWorkers.length === workers.length ? renderWorkerFinished : (
            <>
              {renderWorkers}
              <Box sx={{ mt: 35 }}>
                <Typography sx={Styles.text} variant="subtitle1" component="p">{'<--- Swipe Left To Fire | Swipe Right To Hire --->'}</Typography>
              </Box>
            </>
          ) }
        </Box>
        { hiredWorkers.length > 0
                         && (
                         <Paper elevation={1} sx={Styles.hiredContainer}>
                           <Typography align="center">Hired:</Typography>
                           <Box sx={Styles.hiredWorkers}>
                             {renderHiredWorkers}
                           </Box>
                         </Paper>
                         )}
      </Box>
    </Container>
  );
};

const mapStateToProps = (state: ImageStateP) => ({
  workers: state.getImages.workers,
  isLoading: state.getImages.isLoading,
  error: state.getImages.error,
  hiredWorkers: state.updateWorkers.hiredWorkers,
  removedWorkers: state.updateWorkers.removedWorkers,
});

export default connect(mapStateToProps, null)(CastLibrary);
