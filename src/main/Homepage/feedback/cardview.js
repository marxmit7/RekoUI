import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./index.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
});

export default function Maincard(props) {
  const classes = useStyles();

  return (

    <div className="maincardview">
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        // image="https://avatars3.githubusercontent.com/u/22710677?s=460&v=4"
        image = {props.fileurl}
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

  );
}
