import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../state/actions";
import { Feature } from "../types";

type AdditionalFeatureProps = {
  addFeature: (feature: Feature) => void;
  feature: Feature;
};

const AdditionalFeature = (props: AdditionalFeatureProps) => {
  return (
    <li>
      <button className="button" onClick={() => props.addFeature(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
