export const initialState = {
    favouriteSpells: []
};

export const actionTypes = {
    ADD_TO_FAVOURITE: "ADD_TO_FAVOURITE",
    REMOVE_FROM_FAVOURITE: "REMOVE_FROM_FAVOURITE"
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVOURITE:
            return {
                ...state,
                favouriteSpells: [...state.favouriteSpells, action.spell],
            };
        case actionTypes.REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favouriteSpells: state.favouriteSpells.filter(spell => spell.index !== action.index)
            }
        default:
            return state
    }
}

export default reducer;

