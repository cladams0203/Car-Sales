import { ADD_FEATURE } from "../actions/addFeature";
import { REMOVE_FEATURE } from "../actions/removeFeat";

// { id: 1, name: 'V-6 engine', price: 1500 },

// export const initialState = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: "2019 Ford Mustang",
//     image:
//       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//     features: [],
//   },
//   additionalFeatures: [
//     { id: 1, name: "V-6 engine", price: 1500 },
//     { id: 2, name: "Racing detail package", price: 1500 },
//     { id: 3, name: "Premium sound system", price: 500 },
//     { id: 4, name: "Rear spoiler", price: 250 },
//   ],
// };

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

export interface Feature {
  id: number;
  name: string;
  price: number;
}

export type CarActions =
  | { type: typeof ADD_FEATURE; payload: Feature }
  | { type: typeof REMOVE_FEATURE; payload: Feature };
