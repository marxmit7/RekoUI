import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import YouTubePlayer from "./yt";
export default function YTFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    var link = null;

    function handleClickOpen() {
        setOpen(true);
    }

    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }

    function handleOkClose(event) {
        var id = YouTubeGetID(link);
        console.log(id, link);
        var embedlink = "https://www.youtube.com/embed/" + id;
        props.onChangeValue(embedlink);
        setOpen(false);
    }
    function handleClose(event) {
        setOpen(false);
    }
    function handleChange(event) {
        link = event.target.value;
        // props.onChangeValue(link);
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Add YouTube Link
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="YTLink"
                        label="YouTube Link"
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <label htmlFor="YTLink">
                        <Button onClick={handleOkClose} color="primary">
                            ok
                        </Button>
                    </label>
                </DialogActions>
            </Dialog>
        </div>
    );
}
