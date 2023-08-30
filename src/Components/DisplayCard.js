import React from "react";
import {Card} from "react-bootstrap";

function DisplayCard(props){
  
    return(
      <>
          <div className="container">
          <table style={{width:"100%"}}>
            <th>Details</th>
            <th>Photo</th>
          </table>
      </div>
      
        <div className="card">
            <Card.Body style={{display:'flex', justifyContent: 'space-between', padding:'0 23px'}}>
                <div>
                  <Card.Title><h3>{props.name}</h3></Card.Title>
                  <Card.Text>{props.email}</Card.Text>
                  <Card.Text>{props.phone}</Card.Text>
                  <Card.Text>{props.address}</Card.Text>
                  <Card.Text>{props.course}</Card.Text>
                </div>
                <div>
                  <Card.Img src={props.image} id='otp' style={{height:'220px', width:'190px'}}/>
                </div>
            </Card.Body>
        </div>
      </>
    )
}
export default DisplayCard