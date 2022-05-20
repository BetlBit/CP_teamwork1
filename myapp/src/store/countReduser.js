const defState = {
	count: 0
}

const INCR = 'INCR'
const DECR = 'DECR'

export const countReducer = (state = defState, action) => {
	switch (action.type){
		case INCR:
			if(state.count < 4){
				return {...state, count: state.count + 1}
			}

		case DECR:
			if(state.count > 0){
				return {...state, count: state.count - 1}
			}
	}
	return state
}

export const incrAction = () => ({type: INCR})
export const decrAction = () => ({type: DECR})