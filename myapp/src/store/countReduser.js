const defState = {
	count: 0
}

const INCR = 'INCR'
const DECR = 'DECR'

export const countReducer = (state = defState, action) => {
	switch (action.type){
		case INCR:
			return { count: state.count + 1}

		case DECR:
			return { count: state.count - 1}
	}
	return state
}

export const incrAction = () => ({type: INCR})
export const decrAction = () => ({type: DECR})