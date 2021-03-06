import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
  // Methods
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{this.props.campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  renderComments(comments) {
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
  render() {
    const campsite = this.props.campsite;
    if (campsite) {
      return (
        <div className="row">
          {this.renderCampsite(campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    }
    return <div></div>;
  }
}

export default CampsiteInfo;
