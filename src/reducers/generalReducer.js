import { SET_WALLETS } from "../actions/types"

const initialState = {
	wallets: []
};

const generalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WALLETS:
			return { ...state, wallets: action.payload }
		default: return state;
	}
}

export default generalReducer