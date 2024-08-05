const initialState = {
    Productos: [],
    usuarioDetail: [],
    carritoCompra: [],
    detail: {},
    total: 0,
    comprados: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "USUARIO_ID":
            return {
                ...state,
                usuarioDetail: payload
            };
        default:
            return { ...state }
    };


}