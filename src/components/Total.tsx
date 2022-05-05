import React from "react";
import { connect } from "react-redux";
import { Car, CarState } from "../types";

type TotalProps = {
  car: Car;
  additionalPrice: number;
};

const Total = (props: TotalProps) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect((state: CarState) => ({ car: state.car, additionalPrice: state.additionalPrice }))(Total);
