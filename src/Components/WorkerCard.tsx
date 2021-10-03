import React from 'react';
import { Box } from '@mui/system';
import TinderCard from 'react-tinder-card';
import { Paper, Typography } from '@mui/material';
import * as Styles from '../Styles/Styles';

export interface WorkerObj {
     name: string,
     image: string
}

export interface WorkerCardProps {
     key: string
     worker: WorkerObj,
     index: number,
     swiped: (...args: any[]) => any
}

const WorkerCard = ({ worker, index, swiped }: WorkerCardProps) => (
  <Box sx={{ position: 'absolute', marginTop: index * 0.1, mr: index * 0.3 }}>
    <TinderCard
      preventSwipe={['up', 'down']}
      onSwipe={(direction) => swiped(direction, worker.name)}
    >
      <Paper elevation={4} sx={{ p: 2, borderRadius: '30px' }}>
        <Box sx={Styles.workerCardBox} style={{ backgroundImage: `url(${worker.image})` }}>
          <Box sx={Styles.workerCardTextContainer}>
            <Typography sx={Styles.text} variant="subtitle1" component="label">{worker.name}</Typography>
          </Box>
        </Box>
      </Paper>
    </TinderCard>
  </Box>
);

export default WorkerCard;
