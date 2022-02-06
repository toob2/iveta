export default (state, action) => {
   switch (action.type) {
      case 1:
         return {
            active: 1,
         };
      case 2:
         return {
            active: 2,
         };
      case 3:
         return {
            active: 3,
         };
      case 4:
         return {
            active: 4,
         };
      default:
         return {
            active: 1,
         };
   }
};
