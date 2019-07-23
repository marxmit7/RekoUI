import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import YouTubePlayer from "./yt";
export default function YTFormDialog() {
  const [open, setOpen] = React.useState(false);

  var showYTComponent= false;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function _onAddLinkButtonClick() {
		showYTComponent= true;
  }

  return (
    <div>
      <Button  variant="contained" onClick={handleClickOpen}>
        Add YouTube Link
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="YTLink"
            label="YouTube Link"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
