import React from 'react'
import { Box } from '@mui/system'
import TinderCard from 'react-tinder-card';
import { Paper, Typography } from '@mui/material';

export interface WorkerObj {
     name: string,
     image: string
}

export interface WorkerCardProps {
     worker: WorkerObj,
     index: number,
     swiped: (...args: any[]) => any
}

const WorkerCard = ({worker, index, swiped}: WorkerCardProps) => {
     return (
          <Box sx={{position: 'absolute', marginTop: index*.1, mr: index*.3}}>
               <TinderCard
                    preventSwipe={['up', 'down']}
                    onSwipe={(direction) => swiped(direction, worker.name)} >
                    <Paper elevation={4} sx={{p: 2, borderRadius: '30px'}} >
                         <Box sx={{
                              position: 'relative', 
                              height: 200, width: 200, 
                              backgroundImage: `url(${worker.image})`, 
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center',
                              display: 'flex',
                              flexFlow: 'column',
                              justifyContent: 'flex-end',
                              borderRadius: '25px'
                         }}
                         >
                         <Box sx={{backgroundColor: 'black', p:2, borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px'}}> 
                              <Typography sx={{mt: 2,  fontVariantCaps: 'petite-caps', color: 'white'}} variant='subtitle1' component='label'>{worker.name}</Typography>
                         </Box>
                         </Box>
                    </Paper>
               </TinderCard>
          </Box>
     )
}

export default WorkerCard;