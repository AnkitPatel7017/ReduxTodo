export const Add = (Myname) => {
	return {
		type: "ADD",
		payload: {
			id: Date.now(),
			MyData: Myname
		}
	}
}

export const Delete = (id) => {
	return {
		type: "Delete",
		id
	}
}
export const Remove = () => {
	return {
		type: "Remove",

	}
}

