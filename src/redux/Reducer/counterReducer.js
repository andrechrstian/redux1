const counterState = {
    total: 0,
}

export const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case "Tambah":
            return {
                ...counterState,
                total: action.payload
            };
        case "Kurang":
            return {
                ...counterState,
                total: action.payload
            }
    default:
        return state
    }
}

