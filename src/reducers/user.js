const collection = [];

export default (state = collection, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
            
                action.payload
            ];
            case 'REMOVE_USER':
            return state.filter(({ _id }) => _id !== action.id);
      default:
          return state;
    }
};