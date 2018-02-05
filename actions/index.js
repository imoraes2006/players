/**
 * Action Creator emit actions
 * Says something happened and the code that changes 
 * actually changes the store lives somewhere else
 */

export const selectPlayer = (playerId) => {
	return {
		type: 'select_player',
		payload: playerId
	};
};