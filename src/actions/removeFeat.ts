import { Feature } from "../types";

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function removeFeat(input: Feature) {
  return {
    type: REMOVE_FEATURE,
    payload: input,
  };
}
