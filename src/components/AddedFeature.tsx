import React from "react";
import { Feature } from "../types";

interface AddedFeatureProps {
  feature: Feature;
  removeItem: (feature: Feature) => {};
}

const AddedFeature: React.FC<AddedFeatureProps> = (props) => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          props.removeItem(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
