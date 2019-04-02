export const addUser = ( user ) => {
  return{ type: "ADD_USER", payload: user }
}

  export const removeUser = ({ id } = {}) => ({
    type: 'REMOVE_USER',
    id
  });