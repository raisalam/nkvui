import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    withStyles,
    Box,
  } from "@material-ui/core";

function SocietySummary(props) {

    return (

        <Card>
      <Box pt={2} px={2} pb={4}>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              Hello
            </Typography>
          </div>
          </Box>
          </Box>
          </Card>
    );


}