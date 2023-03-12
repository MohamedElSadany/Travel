import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
const Map = ({setCoordinates,setBounds,coordinates}) => {

  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCoodzJh0ZG9GqhVOYutT9f_yoPyAilU3s' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e)=> {
              setCoordinates({lat : e.center.lat, lng:e.center.lng});
              setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
        }
        }
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;
