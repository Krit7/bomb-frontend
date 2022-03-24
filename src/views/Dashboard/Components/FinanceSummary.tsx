import React, {useCallback, useMemo} from 'react';


import HomeImage from '../../assets/img/background.jpg';
import { Grid, Box } from '@material-ui/core';

const FinanceSummary:React.FC = () => {
    return (
        <div>
      <h2>FINANCE SUMMARY</h2>
      <hr></hr>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container xs={12}>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              Current Supply
            </Grid>
            <Grid item xs={2}>
              Total Supply
            </Grid>
            <Grid item xs={3}>
              Price
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              COL-12
            </Grid>
            <Grid item xs={2}>
              COL-13
            </Grid>
            <Grid item xs={3}>
              COL-14
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              COL-12
            </Grid>
            <Grid item xs={2}>
              COL-13
            </Grid>
            <Grid item xs={3}>
              COL-14
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              COL-12
            </Grid>
            <Grid item xs={2}>
              COL-13
            </Grid>
            <Grid item xs={3}>
              COL-14
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          COL-2
        </Grid>
        <Grid item xs={3}>
          COL-3
        </Grid>
      </Grid>
    </div>
    )
}

export default FinanceSummary;