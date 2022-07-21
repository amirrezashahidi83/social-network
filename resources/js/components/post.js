import {useState,useEffect} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';

const Post = ({id}) => {

	const [data,setData] = useState(0);

	useEffect(()=>{	
		new Promise((resolve,reject) => {

			axios.post("/api/post",{id:id}).then(
				function(response){
					resolve((response.data));
			})

		}).then((p)=>{
			axios.get("/api/user/"+p.sender_id).then(
				function(response){
					let card = document.getElementById('card');
					
			})
		});
	
	},[]);

	return(

		<Card id='card'>
			<Card.Header>

			</Card.Header>

			<Card.Body>

			</Card.Body>

			<Card.Footer>
			</Card.Footer>
		</Card>
		);	
}

export default Post;