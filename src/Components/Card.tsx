import { Paper, Typography, Box } from '@mui/material'
import React from 'react'

export interface CardProps {
     name: string,
     src: string
}

const Card = ({name, src}: CardProps) => {
     return(
          <Paper elevation={4} sx={{ maxWidth: 150, m: 1, p: 1, textAlign: 'center'  }}>
               <Box sx={{height: 130, width: 130, backgroundColor: 'black', overflow: 'hidden', }}>
                    <img src={src} height='130' width='auto' alt={name} />
               </Box>
               <Typography sx={{mt: 2, fontVariantCaps: 'petite-caps'}} variant='subtitle1' component='label'>{name}</Typography>
          </Paper>
     )
}

export default Card