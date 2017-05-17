const initialState = {
	name: '小黄'
};

export default (state=initialState, action) => {
	console.log(state);
	if(action.type === 'animal/SHOUT') {
		//alert(1);
		return {
			name: state.name + 1
		};
	} else {
		return state;
	}
}