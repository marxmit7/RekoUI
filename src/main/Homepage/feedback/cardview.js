import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./index.css";
import DividerMain from "./divider";
const useStyles = makeStyles({
    card: {
        maxWidth: 400
    },
    media: {
        height: 300
    }
});

export default function Maincard(props) {
    const classes = useStyles();
    var pingDividerMain;
    if(typeof props.data !=='undefined')
    {
      pingDividerMain = <DividerMain  data={props.data}/>;
    }
    else
    {
      pingDividerMain =  "";
    }

    return (
        <div className="maincardview">
            <div>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.fileurl}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div>

          {pingDividerMain}
            </div>
        </div>
    );
}
