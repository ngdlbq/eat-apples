import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Dog from '../components/Dog'
import actions from '../actions/animalActions';

class Animal extends Component{
	render(){
		let {state,actions} = this.props;

		let mockState = {
			name: '小花'
		};
		let mockActions = {
			shout: () => {
				alert('汪汪汪');
			}
		};

		//state = mockState;
		//actions = mockActions;

		return (
			<div>
				<Dog state={state} actions={actions} />
			</div>
		)
	}
}

// 参数 state 根据 store.getState() 获得，各 rducer 各取所需，拿自己用到的那个 state 即可
const mapStateToProps = (state) => {
	console.log(state);
	return {
		state: state.animalReaducer
	}
};
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions,dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(Animal)