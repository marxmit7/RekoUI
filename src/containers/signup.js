import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignIn from "./login";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function SignUp(props) {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [email, setEmail] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            email: email,
            username: username,
            password1: password1,
            password2: password2
        });
        props.onAuth(username, email, password1, password2);
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        yesValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    name="username"
                                    autoFocus
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password1"
                                        label="Password"
                                        type="password"
                                        id="password1"
                                        autoComplete="current-password"
                                        value={password1}
                                        onChange={e =>
                                            setPassword1(e.target.value)
                                        }
                                    />{" "}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password2"
                                        label="Confirm Password"
                                        type="password"
                                        id="password2"
                                        autoComplete="current-password"
                                        value={password2}
                                        onChange={e =>
                                            setPassword2(e.target.value)
                                        }
                                    />{" "}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) =>
            dispatch(actions.authSignup(username, email, password1, password2))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
