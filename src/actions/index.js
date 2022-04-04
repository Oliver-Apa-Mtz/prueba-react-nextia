import { SET_WALLETS, SET_BENEVITS } from "./types"

export const setWallets = (payload) => ({
    type: SET_WALLETS,
    payload
})

export const setBenevits = (payload) => ({
    type: SET_BENEVITS,
    payload
})