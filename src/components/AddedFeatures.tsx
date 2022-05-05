import React from "react";
import { connect } from "react-redux";
import { Car, CarState, Feature } from "../types";

import AddedFeature from "./AddedFeature";

type AddedFeaturesProps = {
  car: Car;
};

const AddedFeatures = (props: AddedFeaturesProps) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect((state: CarState) => ({ car: state.car }))(AddedFeatures);
