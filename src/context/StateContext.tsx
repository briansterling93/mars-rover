import { createContext } from "react";

export interface IState {
  earth_date: string;
  landing_date: string;
  launch_date: string;
  rover_status: string;
}

export const initialState = {
  earth_date: "",
  landing_date: "",
  launch_date: "",
  rover_status: "",
};

export enum APP_ACTIONS {
  UPDATE_EARTH_DATE = "UPDATE_EARTH_DATE",
  UPDATE_LANDING_DATE = "UPDATE_LANDING_DATE",
  UPDATE_LAUNCH_DATE = "UPDATE_LAUNCH_DATE",
  UPDATE_ROVER_STATUS = "UPDATE_STATUS",
}

type AppAction = { [key: string]: (state: IState, action: any) => IState };

export const appActions: AppAction = {
  [APP_ACTIONS.UPDATE_EARTH_DATE]: (state: IState, actions: any) => {
    return { ...state, earth_date: actions.payload };
  },
  [APP_ACTIONS.UPDATE_LANDING_DATE]: (state: IState, actions: any) => {
    return { ...state, landing_date: actions.payload };
  },
  [APP_ACTIONS.UPDATE_LAUNCH_DATE]: (state: IState, actions: any) => {
    return { ...state, launch_date: actions.payload };
  },
  [APP_ACTIONS.UPDATE_ROVER_STATUS]: (state: IState, actions: any) => {
    return { ...state, rover_status: actions.payload };
  },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
