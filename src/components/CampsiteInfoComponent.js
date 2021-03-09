import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p className="mb-0">{comment.text}</p>
              <footer className="mb-3">
                --<span> </span>
                {comment.author},<span> </span>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </footer>
            </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}

function CampsiteInfo(props) {
  const campsite = props.campsite;
  if (campsite) {
    return (
      <div className="container">
        <div className="row">
          <RenderCampsite campsite={campsite} />
          <RenderComments comments={props.campsite.comments} />
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default CampsiteInfo;
