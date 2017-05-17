import ajax from '../services/ajax'; 

let actions = {
	pickApple: () => {
		return (dispatch,getState) => {
			if(getState().isPacking) {
				return;
			}

			dispatch(actions.beginPickApple());

			ajax({
				type: 'get',
				url: '/appleBasket/pickApple'
			}).done(data => {
				dispatch(actions.donePickApple(data));
			}).fail(xhr => {
				dispatch(actions.failPickApple(xhr.responseText));
			})
		}
	},
	beginPickApple: () => ({
		type: 'apple/BEGIN_PICK_APPLE'
	}),
	donePickApple: weight => ({
		type: 'apple/DONE_PICK_APPLE',
		payload: weight
	}),
	failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),
    eatApple: appleId => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })
};

export default actions