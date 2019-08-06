import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImageMethodTabs from "../tabsView/imageMethod";
import VideoMethodTabs from "../tabsView/videoMethod";
import FeedbackMethodTabs from "../tabsView/FeedbackMethod";
import EmbedMethodTabs from "../tabsView/EmbedMethod";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1)
    }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [renderView, renderViewSet] = React.useState("image");

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }
    function handleRenderToggle(props) {
        renderViewSet(props);
    }

    function clickHandle(props) {
        switch (props) {
            case "image":
                return <div>{handleRenderToggle(props)}</div>;
            case "Video":
                return <div>{handleRenderToggle(props)}</div>;
            case "Embed":
                return <div>{handleRenderToggle(props)}</div>;
            case "Feedback":
                return <div>{handleRenderToggle(props)}</div>;
            default:
                return console.log("default");
        }
    }

    const drawer = (
        <div>
            <div />
            <br />
            <br />

            <Divider />
            <List>
                {["image", "Video", "Embed", "Feedback"].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => clickHandle(text)}
                    >
                        <ListItemIcon>
                            <Icon>{text}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {(() => {
                    switch (renderView) {
                        case "image":
                            return (
                                <div>
                                    <ImageMethodTabs />
                                </div>
                            );
                        case "Video":
                            return (
                                <div>
                                    <VideoMethodTabs />
                                </div>
                            );
                        case "Embed":
                            return (
                                <div>
                                    <EmbedMethodTabs />
                                </div>
                            );
                        case "Feedback":
                            return (
                                <div>
                                    <FeedbackMethodTabs />
                                </div>
                            );
                        default:
                            return console.log("default");
                    }
                })()}
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.object
};

export default ResponsiveDrawer;
