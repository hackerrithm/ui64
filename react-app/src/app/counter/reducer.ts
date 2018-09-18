import { Action } from "./actions";
import { combineReducers } from "redux";

export type Counter = { value: number };

export type All = {
  counter: Counter;
  isSaving: boolean;
  isLoading: boolean;
  error: string;
};

function isSaving(state: boolean = false, action: Action): boolean {
  switch (action.type) {
	case "SAVE_COUNT_REQUEST":
	  return true;
	case "SAVE_COUNT_SUCCESS":
	case "SAVE_COUNT_ERROR":
	  return false;
	default:
	  return state;
  }
}

function isLoading(state: boolean = false, action: Action): boolean {
  switch (action.type) {
	case "LOAD_COUNT_REQUEST":
	  return true;
	case "LOAD_COUNT_SUCCESS":
	case "LOAD_COUNT_ERROR":
	  return false;
	default:
	  return state;
  }
}

function error(state: string = "", action: Action): string {
  switch (action.type) {
	case "LOAD_COUNT_REQUEST":
	case "SAVE_COUNT_REQUEST":
	  return "";
	case "LOAD_COUNT_ERROR":
	case "SAVE_COUNT_ERROR":
	  return action.error;
	default:
	  return state;
  }
}

const counterState: Counter = {
  value: 0
};

function counter(state: Counter = counterState, action: Action): Counter {
  switch (action.type) {
	case "INCREMENT_COUNTER":
	  const { delta } = action;
	  return { value: state.value + delta };

	case "DECREMENT_COUNTER":
	  const { curVal } = action;
	  return { value: state.value - curVal < 0 ? 0 : state.value - curVal };

	case "RESET_COUNTER":
	  return { value: 0 };

	case "LOAD_COUNT_SUCCESS":
	  return { value: action.response.value };

	default:
	  return state;
  }
}

export const initialState = {
  counter: counterState,
  isSaving: false,
  isLoading: false,
  error: ""
};

const reducers = combineReducers<All>({
  counter,
  isSaving,
  isLoading,
  error
});

export default reducers;
