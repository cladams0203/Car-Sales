export interface Feature {
  id: number;
  name: string;
  price: number;
}

export interface Car {
  price: number;
  name: string;
  image: string;
  features: Feature[];
}

export interface CarState {
  additionalPrice: number;
  car: Car;
  additionalFeatures: Feature[];
}

export enum ActionStrings {
  ADD_FEATURE = "ADD_FEATURE",
  REMOVE_FEATURE = "REMOVE_FEATURE",
}

export type Action = { type: ActionStrings.ADD_FEATURE; payload: Feature } | { type: ActionStrings.REMOVE_FEATURE; payload: Feature };
