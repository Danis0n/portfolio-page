import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const WorksPage = () => {

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    background: 'var(--color-background)'
  }));

  const [spacing, setSpacing] = useState(2);

  return (
    <div className='container'>
      
      <div className="p__name" style={{
        textDecoration: 'none'
      }}>
        Works
      </div>
{/* 
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
            </Grid>
          ))}

        </Grid>
      </Grid>
    </Grid> */}

    <Box sx={{ width: '75%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className='container'>
          A video work generated with deep learning,
          imitating famous four
          painters like Van Gogh
        </Grid>
        <Grid item xs={6} className='container'>
          A video work generated with deep learning,
          imitating famous four
          painters like Van Gogh
        </Grid>

        <Grid item xs={6} className='container'>
          A video work generated with deep learning,
          imitating famous four
          painters like Van Gogh
        </Grid>
        <Grid item xs={6} className='container'>
          A video work generated with deep learning,
          imitating famous four
          painters like Van Gogh
        </Grid>
      </Grid>
    </Box>

    </div>
  )
}

export default WorksPage