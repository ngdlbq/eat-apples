import React,{ Component } from 'react'

/*
普通显示组件使用统一actions属性接受父级的action，可以在组件内部
建立mockActions, 这个mockActions 既有文档功能，也有测试功能，非常实用
*/
class AppleItem extends Component{
	render(){
		let { state,actions } = this.props;

		// mock 数据  既有文档功能，又有测试功能
		let mockState = {
            id: 1,
            weight: 256,
            isEaten: false
		};
		// mock 数据  既有文档功能，又有测试功能      	 
        let mockActions = {
            eatApple : id => console.log('eatApple',id)
        };

        // 自动切换器
        //state = mockState;
        //actions = mockActions;

        if(state.isEaten){
        	return null;
        }

		return (
			<div className="appleItem">
			    <div className="apple"><img src="../images/apple.png" alt=""/></div>
			    <div className="info">
			        <div className="name">红苹果 - {state.id}号</div>
			        <div className="weight">{state.weight}克</div>
			    </div>
			    <div className="btn-div"><button onClick={() => actions.eatApple(state.id)}>吃掉</button></div>
			</div>
		)
	}
}

export default AppleItem