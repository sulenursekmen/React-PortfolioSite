// components/Loader.js

import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="warning" />
          </Box>
   
    </div>
  );
};

export default Loader;
