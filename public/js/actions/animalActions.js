let actions = {
	shout: () => ({
		type: 'animal/SHOUT'
	})
};

// actions 是广而告之，所有的 reducer 都会接收到,根据匹配再处理

export default actions