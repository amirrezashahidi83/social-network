import {useState,useEffect} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';
import MediaSlider from './MediaSlider';

import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';

const Post = ({id}) => {

	const [data,setData] = useState(0);

	useEffect(()=>{	
		let p = new Promise((resolve,reject) => {

			axios.post("/api/post",{id:id}).then(
				function(response){
					resolve((response.data));
			})

		}).then((p)=>{
			axios.get("/api/user/"+p.sender_id).then(
				function(response){
					setData(p);
					
			})
		});
	},[]);

	return(

		<Card id='card'>
			<Card.Header>
			<Col>
			<Avatar  />
			</Col>
			<Col>
			<Row>{data.displayname}</Row>
			<Row>{data.username}</Row>
			</Col>
			<Col></Col>
			</Card.Header>

			<Card.Body>
			{data != 0 ? <MediaSlider media={data.media} /> : <div></div> }
			</Card.Body>

			<Card.Footer>

			</Card.Footer>
		</Card>
		);	
}

export default Post;