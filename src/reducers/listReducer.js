const initialState = {
    ListClimate: []
}

const ListClimateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_CLIMATE':
            return { ...state, ListClimate: action.payload.list }
        default: return state
    }
}

export default ListClimateReducer