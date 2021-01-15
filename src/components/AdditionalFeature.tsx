import React from "react";

import { Feature } from "../types";

interface AdditionalFaeatureProps {
  feature: Feature;
  addItem: (feature: Feature) => {};
}

const AdditionalFeature: React.FC<AdditionalFaeatureProps> = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
