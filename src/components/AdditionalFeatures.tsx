import React from "react";
import { connect } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";
import { addFeature } from "../actions/addFeature";
import { Feature, CarState } from "../types";

interface AddditionalFeatureProps {
  additionalFeatures: Feature[];
  addFeature: (feature: Feature) => {};
}

const AdditionalFeatures: React.FC<AddditionalFeatureProps> = (props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item: Feature) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addItem={props.addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
function mapStateToProps(state: CarState) {
  return {
    additionalFeatures: state.additionalFeatures,
  };
}
export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
