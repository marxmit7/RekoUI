import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AddNewContent } from "./buttons";
import axios from "axios";

export default function EmbdeFormDialog() {
    const [open, setOpen] = React.useState(false);
    var file =null;

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    function handleState(event)
    {
        file = event.target.files[0]
    }
    function handleCreate(event) {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append('file',file);
        let url = "http://localhost:8000/api/embed/";
        axios
            .post(url, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(response => {
                console.log(response);
                })
            .catch(console.log);
            
            window.location.reload();
    }

    return (
        <div>
            <div onClick={handleClickOpen}>
                <AddNewContent />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Embed new face</DialogTitle>
                <form onSubmit={handleState}>
                <DialogContent>
                    <DialogContentText>
                        Keep the name of the image as ID name (e.g{" "}
                        <b>Barack Obama.jpg</b> )
                    </DialogContentText>

                    <input
                        accept="image/*"
                        type="file"
                        //   style={{ display: "none" }}
                          onChange={handleState}
                        id="contained-button-file"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <label htmlFor="contained-button-file">
                        <Button onClick={handleCreate} color="primary">
                            Create
                        </Button>
                    </label>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
