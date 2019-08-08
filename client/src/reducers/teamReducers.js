import { TEAM_SUCCESS } from "../actions/types";

const initialState = {
	created: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case TEAM_SUCCESS:
			return {
				created: true
			};
		default:
			return state;
	}
}
