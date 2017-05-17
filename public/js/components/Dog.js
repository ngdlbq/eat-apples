import React,{Component} from 'react'

/*
const Dog = ({state,actions}) => {
	mockState = {
		name: '小花'
	};
	mockActions = {
		shout: () => {
			alert('汪汪汪');
		}
	};

	//state = mockState;
	//actions = mockActions;

	return (
		<button onClick={actions.shout}>{state.name}</button>
	);
}
*/
class Dog extends Component{
	render(){
		let {state,actions} = this.props;

		return (
			<button onClick={actions.shout}>{state.name}</button>
		);
	}
}

export default Dog