import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WorkItem from '../components/WorkItem';
import Boys from '../public/img/boys.jpg'
import Clown from '../public/img/clown.jpg'
import Who from '../public/img/who.jpg'
import Geralt from '../public/img/geralt.jpg'

const WorksPage = () => {

  return (
    <div className='container'>
      
      <div className="p__name" style={{
        textDecoration: 'none'
      }}>
        Works
      </div>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className='container'>
          <WorkItem img={Geralt}>
            <div className="work__name">WORK1</div>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            At necessitatibus dolores ullam 
          </WorkItem>
        </Grid>

        <Grid item xs={6} className='container'>
          <WorkItem img={Clown}>
            <div className="work__name">WORK2</div>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            At necessitatibus dolores ullam 
          </WorkItem>
        </Grid>
        

        <Grid item xs={6} className='container'>
          <WorkItem img={Boys}>
            <div className="work__name">WORK3</div>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            At necessitatibus dolores ullam 
          </WorkItem>
        </Grid>
        <Grid item xs={6} className='container'>
          <WorkItem img={Who}>
            <div className="work__name">WORK4</div>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
              At necessitatibus dolores ullam 
          </WorkItem>
        </Grid>
      </Grid>
    </Box>

    </div>
  )
}

export default WorksPage