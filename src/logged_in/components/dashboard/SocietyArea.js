import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import {
    Card,
    CardContent,
    Typography,

    withStyles,
    Grid,
    Box,
} from "@material-ui/core";

const styles = (theme) => ({
    cardContentInner: {
        marginTop: theme.spacing(-4),
    },
});


const gridHeight = '100px';

function SocietyArea(props) {
    const { color, data, title, classes, theme, height } = props;
    
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={3}>
                <Card>
                    <Box pt={2} px={2} pb={2}>
                        <Box display="flex" justifyContent="space-between">
                            <div>
                                <Typography variant="body2" color="textSecondary">
                                    Currently In 
                                </Typography>
                                <Typography variant="h4" style={{color:"#00adb5"}}>
                                    13
                                </Typography>
                            </div>
                           
                        </Box>
                    </Box>
                    <CardContent>

                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Visitors
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                7
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Services
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                1
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Delivery
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                6
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Cab
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                0
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3}>
                <Card>
                    <Box pt={2} px={2} pb={2}>
                        <Box display="flex" justifyContent="space-between">
                            <div>
                                <Typography variant="body2" color="textSecondary">
                                    Staff on Duty
                                </Typography>
                                <Typography variant="h4" style={{color:"#00adb5"}}>
                                    3
                                </Typography>
                            </div>
                           
                        </Box>
                    </Box>
                    <CardContent>
                    <Box height={gridHeight}>
                        <Grid container spacing={1} height={gridHeight}>
                            <Grid item xs={6} md={3} >
                                Security
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                3
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Others
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                0
                            </Grid>
                        </Grid>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3}>
                <Card>
                    <Box pt={2} px={2} pb={2}>
                        <Box display="flex" justifyContent="space-between">
                            <div>
                                <Typography variant="body2" color="textSecondary">
                                   Total Plots
                                </Typography>
                                <Typography variant="h4" style={{color:"#00adb5"}}>
                                    531
                                </Typography>
                            </div>
                           
                        </Box>
                    </Box>
                    <CardContent>

                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Residing
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                330
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Tenant
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                1
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Vacant
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                200
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Free
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                0
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3}>
                <Card>
                    <Box pt={2} px={2} pb={2}>
                        <Box display="flex" justifyContent="space-between">
                            <div>
                                <Typography variant="body2" color="textSecondary">
                                    All Complaints 
                                </Typography>
                                <Typography variant="h4" style={{color:"#00adb5"}}>
                                    10
                                </Typography>
                            </div>
                           
                        </Box>
                    </Box>
                    <CardContent>

                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Open
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                6
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Progress
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                0
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Resolved
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                0
                            </Grid>                          
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={3} >
                                Closed
                            </Grid>
                            <Grid item xs={6} md={8} container justify="flex-end">
                                4
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

SocietyArea.propTypes = {
   
};

export default withStyles(styles, { withTheme: true })(SocietyArea);
