import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {AddNewContent} from "./buttons";

export default function EmbdeFormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleCreate(){

  }

  return (
	<div>
      <div onClick={handleClickOpen}>
	  <AddNewContent/>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Embed new face</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep the name of the image as ID name (e.g <b>Barack Obama.jpg</b> )
          </DialogContentText>
		  <input
		  accept="image/*"
		  type="file"
		//   style={{ display: "none" }}
		//   onChange={this.handleState}
		  id="contained-button-file"
		  required
	  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
		  </Button>
          <Button onClick={handleCreate} color="primary">
            Create
		  </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
