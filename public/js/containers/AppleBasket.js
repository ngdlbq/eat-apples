import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppleItem from '../components/AppleItem'

import actions from '../actions/appleActions';
 
class AppleBasket extends Component{

	render(){
		let { state,actions } = this.props;

		// mock 数据
		let mockState = {
			isPicking : false,
			newAppleId: 3,
            apples: [
                {
                    id: 1,
                    weight: 235,
                    isEaten: true
                },
                {
                    id: 2,
                    weight: 256,
                    isEaten: false
                }
            ]
		}

		// 自动切换器
		//state = mockState;

		// 数据转化
		let stats = {
		    appleNow: {
		        quantity: 0,
		        weight: 0
		    },
		    appleEaten: {
		        quantity: 0,
		        weight: 0
		    }
		};

		let appleItems = state.apples.map((apple) => {
			let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
			stats[selector].quantity ++;
			stats[selector].weight += apple.weight;

			return <AppleItem state={apple} actions={{eatApple: actions.eatApple}} key={apple.id} />
		});
		
		return (
			<div className="appleBusket">
			    <div className="title">苹果篮子</div>
			    <div className="stats">
			        <div className="section">
			            <div className="head">当前</div>
			            <div className="content">{stats.appleNow.quantity}个苹果，{stats.appleNow.weight}克</div>
			        </div>
			        <div className="section">
			            <div className="head">已吃掉</div>
			            <div className="content">{stats.appleEaten.quantity}个苹果，{stats.appleEaten.weight}克</div>
			        </div>            
			    </div>
			                
			    <div className="appleList">
			       {appleItems}
			    </div>
			    
			    <div className="btn-div">
			        <button onClick={actions.pickApple}>摘苹果</button>
			    </div>
			    
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		state: state.appleBasketReducer
	}
}

const buildActionDispatcher = dispatch => ({
	actions: bindActionCreators(actions,dispatch)
});

export default connect(mapStateToProps,buildActionDispatcher)(AppleBasket)