export default (state, action) => {
   switch (action.type) {
      case "SET_ACTIVE":
         return {
            active: action.active,
         };
      case "SET_INACTIVE":
         return {
            active: action.active,
         };
      default:
         return state;
   }
};
