import { Feature } from "../types";

export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature(input: Feature) {
  return {
    type: ADD_FEATURE,
    payload: input,
  };
}
