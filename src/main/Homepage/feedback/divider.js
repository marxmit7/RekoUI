import React from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
    root: {
        width: "120%",
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function InsetDividers(props) {
	const classes = useStyles();
	const somedata = props.data;

	console.log(somedata)
	// somedata.map(o => console.log(typeof(o)));


    return (
		<div>
		{
			// temp
			JSON.stringify(props.data,null,4)
		}</div>
    );
}
