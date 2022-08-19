import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Add, Update, Delete, Remove } from "../Action/ActionIndex";

const Dashboard = () => {
	// GET DATA FROM STORE    
	const MyList = useSelector((state) => state.changenumber.list);
	// console.log(MyList);

	// TO PERFORM EVENT 
	const dispatch = useDispatch()
	const [Myname, setMyname] = useState('')
	const AddData = () => {
		if (Myname === '') {
			alert("enter todo")
		} if (Myname.length < 3) {
			alert("enter minimum 3 latter")
		}
		else {
			dispatch(Add(Myname), setMyname(''))
		}
	}

	const DeleteData = (id) => {
		let text = "Are you Sure ?"
		if (window.confirm(text) === true) {
			// console.log(id);
			dispatch(Delete(id))
		}
	}
	return (
		<div className='container'>
			<div className='col-md-8 offset-md-2'>
				<div className='text-center'>
					<h3>ADD TODO</h3>
				</div>
				<hr />
				<div className='border rounded p-3' >
					<div className='row'>
						<div className='col-10'>
							<input type="text" value={Myname} onChange={(e) => setMyname(e.target.value)} className='form-control' />

						</div>
						<div className='col-2'>
							<button className='btn btn-sm btn-info' onClick={() => AddData()}>ADD</button>

						</div>
					</div>
				</div>
				<br />
				<div className='border rounded p-3'>
					{MyList.length > 0 ?

						<div>
							<table className="table">
								<thead>
									<tr>
										{/* <th>No</th> */}
										<th>TODO</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{MyList.map((data) =>
										<tr key={data.id}>
											<td >{data.data}</td>
											<td>
												<button className='btn btn-sm btn-danger' onClick={() => DeleteData(data.id)}>Delete</button>
											</td>
										</tr>
									)}
								</tbody>
							</table>
							<div className='text-center mt-2'>
								<button className='btn btn-sm btn-danger' onClick={() => dispatch(Remove())}>Remove All</button>
							</div>
						</div>
						:
						<div className='text-center'>
							TODO Not Available
						</div>
					}


				</div>

			</div>
		</div>
	)
}

export default Dashboard