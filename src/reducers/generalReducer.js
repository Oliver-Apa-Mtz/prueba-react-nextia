import { SET_WALLETS, SET_BENEVITS } from "../actions/types"

const initialState = {
	wallets: [],
	benevits: []
};

const generalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WALLETS:
			return { ...state, wallets: action.payload }
		case SET_BENEVITS: {
			return { ...state, benevits: action.payload }
		}
		default: return state;
	}
}

export default generalReducer