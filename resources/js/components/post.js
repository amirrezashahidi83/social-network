import {useState,useEffect} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs,Dropdown} from 'react-bootstrap';
import MediaSlider from './MediaSlider';
import Userheader from './Userheader';
import Comment from './Comment';
import TextField from '@mui/material/TextField';
import EmojiPicker from 'emoji-picker-react';
import {MoreVert,ThumbUpAlt,ThumbDownAlt,InsertComment as InsertCommentIcon,Share} from '@mui/icons-material';


const InsertComment = ()=>{
	return (
		<TextField 
		className='p-3'
		multiline
		/>
		);
}

const Post = ({id}) => {

	const [data,setData] = useState(0);

	const [comments,setComments] = useState([]);

	const loadComments = () => {

		axios.get("/api/post/"+id+"/comments")
		.then(function(response){
			setComments(response.data);
		});
	}
	
	const like = (dislike) =>{
		
		let user_id = 0;
		axios.post("/api/post/like",{post_id:id,user_id:user_id,dislike:dislike})
		.then(function(response){
			setData(response);
		});
	}

	useEffect(()=>{	

		axios.post("/api/post",{id:id}).then(
			function(response){
				setData(response.data);
		});

	},[]);

	console.log(data);
	return(

		<Card id='card'>
			<Card.Header>
				<Row>
					
					<Col>
						{data != 0 ? <Userheader id={data.sender_id}/> :<div></div>}
					</Col>
					<Col></Col>
					<Col>
					    <Dropdown>
					      <Dropdown.Toggle  id="dropdown-basic" className='e-caret-hide' >
					        <MoreVert />
					      </Dropdown.Toggle>

					      <Dropdown.Menu>
					        <Dropdown.Item href="#/action-1">Follow</Dropdown.Item>
					        <Dropdown.Item href="#/action-2">Link</Dropdown.Item>
					        <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
					      </Dropdown.Menu>
					    </Dropdown>
					</Col>
				</Row>
			</Card.Header>

			<Card.Body>
			<p>{data.discussion}</p>
			<p>
			{data != 0 && data.media != null ? <MediaSlider media={data.media} /> : <div></div> }
			</p>
			</Card.Body>

			<Card.Footer>
				<Row>
					<Col>
						<Button onClick={()=>like(false)} variant="secondary"> <ThumbUpAlt /> </Button>
					</Col>

					<Col>
						<Button onClick={()=>like(true)} variant="secondary"> <ThumbDownAlt /> </Button>
					</Col>

					<Col>
						<Button variant="secondary" onClick={()=>loadComments()}> <InsertCommentIcon /> </Button>
					</Col>

					<Col>
						<Button > <Share /> </Button>
					</Col>
				</Row>

					<InsertComment />
					{ comments.map((data)=> <Comment key={data.id} id={data.id} />) }

			</Card.Footer>
		</Card>
		);	
}

export default Post;