/**
 * Reducer responds to actions and then changes state 
 *
 */
export default (state = null, action) => {
   switch (action.type) {
      case 'select_player':
         return action.payload;
      default:
         return state;

   }
 
};