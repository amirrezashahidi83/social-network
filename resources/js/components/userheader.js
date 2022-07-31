import {useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';

const Userheader = ({id})=>{

	const [data,setData] = useState({});

	console.log(id);
	useEffect(()=>{
		axios.get('/api/user/'+id)
		.then(function(response){
			setData(response.data);
		});
	},[id]);
	
	return (
		<Row>
			<Col className='col-4'>
				<Avatar imageSrc={data.profile} />
			</Col>

			<Col>
				<Row>
					<Col>
						{data.displayname}
					</Col>
				</Row>
				<Row>
					<Col>
						{data.username}
					</Col>
				</Row>
			</Col>
		</Row>
		);
}

export default Userheader;