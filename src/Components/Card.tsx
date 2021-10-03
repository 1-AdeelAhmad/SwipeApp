import { Paper, Typography, Box } from '@mui/material';
import React from 'react';
import * as Styles from '../Styles/Styles';

export interface CardProps {
     name: string,
     src: string
}

const Card = ({ name, src }: CardProps) => (
  <Paper elevation={4} sx={Styles.cardPaper}>
    <Box sx={Styles.cardBox}>
      <img src={src} height="130" width="auto" alt={name} />
    </Box>
    <Typography sx={Styles.text} variant="subtitle1" component="label">{name}</Typography>
  </Paper>
);

export default Card;
