// import { Component } from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set5&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

/* class Card extends Component {
  render() {
    // console.log(this.props);
    const { name, email, id } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set5&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
} */

export default Card;
