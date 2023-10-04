import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { registerForEvent } from "../../service/api"

export default function EventCard(props) {
   // console.log(props);


   console.log(props.evt);
   return (
      // <Card sx={{ maxWidth: 345 }}>
      //    <CardMedia
      //       sx={{ height: 140 }}
      //       image={props.evt.imageUrl[0]}
      //       title="green iguana"
      //    />
      //    <CardContent>
      //       <Typography gutterBottom variant="h5" component="div">
      //          {props.evt.title}
      //       </Typography>
      //       <Typography variant="body2" color="text.secondary">
      //          Lizards are a widespread group of squamate reptiles, with over 6,000
      //          species, ranging across all continents except Antarctica
      //       </Typography>
      //    </CardContent>
      //    <CardActions>
      //       <Button size="small" onClick={() => { registerForEvent(props.evt.id) }}>Register</Button>
      //       <Button size="small">Learn More</Button>
      //    </CardActions>
      // </Card>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
         <div className="row g-0">
            <div className="col-md-4">
               <img style={{ maxHeight: "100%" }} src={props.evt.imageUrl[0]} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
               <div className="card-body">
                  <h5 className="card-title">{props.evt.title}</h5>
                  <p className="card-text">{props.evt.desc}</p>
                  <p className="card-text"><small className="text-body-secondary">{props.evt.startTime}</small></p>
                  <button className="btn " onClick={() => { registerForEvent(props.evt.id) }}>Register</button>
               </div>
            </div>
         </div>
      </div>
   );
}
