import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function NSFWForm(props) {
    const [open, setOpen] = React.useState(false);
    var imgfile = null;
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    function handleRefState(event) {
        imgfile = event.target.files[0];
    }

    function handleCreate(event) {
        event.preventDefault();
        props.onChangeValue(imgfile);
        setOpen(false);
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                NSFW
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">NSFW Detector</DialogTitle>
                <form>
                    <DialogContent>
                        <DialogContentText>upload the image</DialogContentText>

                        <input
                            accept="image/*"
                            type="file"
                            onChange={handleRefState}
                            id="refimage"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <label htmlFor="refimage">
                            <Button onClick={handleCreate} color="primary">
                                submit
                            </Button>
                        </label>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
