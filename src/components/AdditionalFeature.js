import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../state/actions";

const AdditionalFeature = (props) => {
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
