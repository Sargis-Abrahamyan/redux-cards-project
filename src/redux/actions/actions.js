import { ADD, REMOVE, SORT, CLEARLIST } from "../constants/constants";

export const add = () => ({
    type: ADD
})

export const remove = (id) => ({
    type: REMOVE,
    payload: id
})

export const sort = () => ({
    type: SORT
})

export const clearList = () => ({
    type: CLEARLIST
})