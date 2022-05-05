import { Action, ActionStrings, Feature } from "../../types";

export const addFeature = (feature: Feature): Action => {
  return { type: ActionStrings.ADD_FEATURE, payload: feature };
};

export const removeFeature = (feature: Feature): Action => {
  return { type: ActionStrings.REMOVE_FEATURE, payload: feature };
};
