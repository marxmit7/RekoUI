import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  card: {
    maxWidth: 100
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const fileurl = "http://localhost:8000"+props.data.fileurl;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Amazing Faces"
          height="100"
          width="100"
          image= {fileurl}
          title="Contemplative Reptile"
        />

      </CardActionArea>

	  <CardActions>
	 <div> {props.data.title}</div>

{/*	<Typography variant="body2" color="textSecondary" component="p">
	{props.data.created_on}
  </Typography> */}

      </CardActions>


    </Card>
  );
}
