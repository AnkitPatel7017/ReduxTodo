const initialState = {
	list: []
}

const changenumber = (state = initialState, action) => {
	switch (action.type) {

		case "ADD":
			// come from action.js
			const { id, MyData } = action.payload;
			return {
				// get initial data using spread oprator 
				...state,
				// Add current data in form of array 
				list: [
					//   Pass updated data  and previes data
					...state.list,
					{
						id: id,
						data: MyData
					}
				]
			}
		case "Delete":
			const Newlist = state.list.filter((id) => id.id !== action.id)
			console.log(Newlist);
			return {
				...state,
				list: Newlist
			}
		case "Remove": return { list: [] }

		default:
			return state
	}
}
export default changenumber;
