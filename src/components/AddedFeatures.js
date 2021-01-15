import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/addFeature";
import { removeFeat } from "../actions/removeFeat";
import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map((item) => (
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
function mapStateToProps(state) {
  return {
    state: state,
  };
}
export default connect(mapStateToProps, { removeFeat })(AddedFeatures);
