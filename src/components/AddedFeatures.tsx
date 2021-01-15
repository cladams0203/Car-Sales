import React from "react";
import { connect } from "react-redux";

import { removeFeat } from "../actions/removeFeat";
import AddedFeature from "./AddedFeature";
import { CarState, Feature, Car } from "../types";

interface AddedFeatureProps {
  car: Car;
  removeFeat: (feature: Feature) => {};
}

const AddedFeatures: React.FC<AddedFeatureProps> = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item: Feature) => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeItem={props.removeFeat}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
function mapStateToProps(state: CarState) {
  return {
    car: state.car,
  };
}
export default connect(mapStateToProps, { removeFeat })(AddedFeatures);
