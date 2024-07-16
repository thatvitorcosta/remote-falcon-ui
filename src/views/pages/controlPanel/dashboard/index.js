import { Box, Grid } from '@mui/material';
import ReactGA from 'react-ga4';

import { gridSpacing } from 'store/constant';

import DashboardCharts from './DashboardCharts';
import DashboardHeader from './DashboardHeader';
import DashboardSponsor from './DashboardSponsor';

const Dashboard = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: '/control-panel/dashboard',
    title: 'Dashboard'
  });
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={gridSpacing}>
        <DashboardSponsor />
        <DashboardHeader />
        <DashboardCharts />
      </Grid>
    </Box>
  );
};

export default Dashboard;
