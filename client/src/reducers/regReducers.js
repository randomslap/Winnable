import { REGISTER_SUCCESS } from "../actions/types";

const initialState = {
	registered: false
};

export default function (state = initialState, action) {
	console.log(state);
	switch (action.type) {
		case REGISTER_SUCCESS:
			return {
				registered: true
			};
		default:
			return state;
	}
}
