import { ADD, REMOVE, SORT, CLEARLIST } from "../constants/constants";
import _ from "lodash";
import uniqId from "uniqid"
import { randomRGBColor } from "../../utils/utils"

const initialState = {
    //value array of cards
    cards: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            const newCards = {
                id: uniqId(),
                CardsValue: Math.trunc(Math.random() * 100),
                bgColor: randomRGBColor()
            }
            return {
                ...state,
                cards: [...state.cards, newCards]
            }
        }
        case REMOVE: {
            const removeCards = state.cards.filter((i) => i.id !== action.payload)
            return {
                ...state,
                cards: removeCards
            }
        }
        case SORT: {
            const sortCard = _.sortBy(state.cards, [function (o) { return o.CardsValue }])
            return {
                ...state,
                cards: sortCard
            }
        }

        case CLEARLIST: {
            return {
                ...state,
                cards: []
            }
        }

        default: return state
    }

};


