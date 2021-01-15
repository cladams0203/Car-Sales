import React from "react";
import { connect } from "react-redux";
import { CarState } from "../types";

interface TotalProps {
  price: number;
  additionalPrice: number;
}

const Total: React.FC<TotalProps> = (props) => {
  console.log(props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};
function mapStateToProps(state: CarState) {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice,
  };
}
export default connect(mapStateToProps)(Total);
