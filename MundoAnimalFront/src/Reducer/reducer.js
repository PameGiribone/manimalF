export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: Array.isArray(action.payload) ? action.payload : [], // Verifica que sea un array
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: Array.isArray(action.payload) ? action.payload : [],
      };
    case "ADD_PRODUCTO":
      return {
        ...state,
        product: [...state.product, action.payload], // Agrega el nuevo producto al estado existente
      };
      case "DELETE_PRODUCTO":
  return {
    ...state,
    product: state.product.filter(producto => producto.id !== action.payload)
  };
  case "UPDATE_PRODUCTO":
      return {
        ...state,
        product: state.product.map(prod => 
          prod.id === action.payload.id ? action.payload : prod
        )
      };

    case "SET_USER_ACTIVE":
      return {
        ...state,
        userActive: action.payload,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SET_USER_EMAIL":
      return {
        ...state,
        userEmail: action.payload,
      };

    default:
      return state;
  }
};
