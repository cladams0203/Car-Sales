import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../state/actions";
import { Feature } from "../types";

type AddedFeatureProps = {
  removeFeature: (feature: Feature) => void;
  feature: Feature;
};

const AddedFeature = (props: AddedFeatureProps) => {
  return (
    <li>
      <button className="button" onClick={() => props.removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
