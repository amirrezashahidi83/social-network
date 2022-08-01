import {useState,useEffect} from 'react';
import {Card,Row,Col,Button} from 'react-bootstrap';
import Userheader from './Userheader';

const Comment = ({id})=>{

	const [data,setData] = useState({});

	const like = (dislike) =>{
		let user_id = 0;
		axios.post("/api/comment/like",{user_id:user_id,comment_id:id,dislike:dislike})
		.then(function(response){
			setData(response.data);
		});
	}

	useEffect(()=>{
		axios.get('/api/comment/'+id)
		.then(function(response){
			setData(response.data);
		});
	},[]);

	return(
			<Card>
				<Card.Header className='bg-light'>
					<Userheader id={data.sender_id}/>
				</Card.Header>
				<Card.Body>
					<p>
						{data.content}
					</p>
				</Card.Body>
				<Card.Footer className='bg-light'>
					<Row>
						<Col>
							<Button onClick={() => like(false)} />
						</Col>

						<Col>
							<Button onClick={() => like(true)} />
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		);
}
export default Comment;