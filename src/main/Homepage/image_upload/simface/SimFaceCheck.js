import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SimFaceCheck(props) {
    const [open, setOpen] = React.useState(false);
    var reffile = null;
    var comfile = null;
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    function handleRefState(event) {
        reffile = event.target.files[0];
    }
    function handleComState(event) {
        comfile = event.target.files[0];
    }
    function handleCreate(event) {
		event.preventDefault();
		props.onChangeValue(reffile,comfile);
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Search face in image
                </DialogTitle>
                <form >
                    <DialogContent>
                        <DialogContentText>
                            upload the reference and compare image
                        </DialogContentText>

                        <input
                            accept="image/*"
                            type="file"
                            onChange={handleRefState}
                            id="refimage"
                            required
                        />

                        <input
                            accept="image/*"
                            type="file"
                            onChange={handleComState}
                            id="comimage"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <label htmlFor="refimage">
                            <Button onClick={handleCreate} color="primary">
                                process
                            </Button>
                        </label>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
