import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import Rating from "../Components/Rating";

const MovieCard = (props) => {
  const movie = props.movie;

  const goToMovie = (url) => {
    window.open(url, "target=_blank");
  };

  return (
    <div className="col-4 mt-3">
      <Link to={`/another/${movie.id}`}>
        <Card style={{ height: `630px`, width: "350px" }}>
          <CardTitle>
            <div className="row justify-content-center mt-2">
              <h6>{movie.title}</h6>
            </div>
          </CardTitle>
          <CardImg
            width="100%"
            style={{ height: `300px` }}
            src={movie.posterUrl}
            alt="Movies"
          />
          <CardBody>
            <div className="row">
              <CardText style={{ width: `300px`, margin: `-20PX 0 0 0` }}>
                {movie.description}
              </CardText>
            </div>
            <div className="column">
              <Rating rating={movie.rate} />
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
