import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function UploadButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" component="span" color="default" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
}

function ProcessButton() {
  const classes = useStyles();

  return (
    <div>
    <Button variant="contained" color="primary" className={classes.button} >
    Primary
  </Button>
    </div>
  );
}

export {UploadButton , ProcessButton}