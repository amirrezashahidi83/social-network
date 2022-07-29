import {useState,useEffect} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs,Dropdown} from 'react-bootstrap';
import MediaSlider from './MediaSlider';

import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({id}) => {

	const [data,setData] = useState(0);

	const like = (dislike) =>{
		
		let user_id = 0;
		axios.post("/api/post/like",{post_id:id,user_id:user_id,dislike:dislike})
		.then(function(response){
			setData(response);
		});
	}

	useEffect(()=>{	
		let p = new Promise((resolve,reject) => {

			axios.post("/api/post",{id:id}).then(
				function(response){
					resolve((response.data));
			})

		}).then((p)=>{
			axios.get("/api/user/"+p.sender_id).then(
				function(response){
					setData(Object.assign(p,response.data));
					
			})
		});
	},[]);
	console.log(data);
	return(

		<Card id='card'>
			<Card.Header>
				<Row>
					
					<Col className='col-2'>
						<Avatar />
					</Col>

					<Col className='col-2'>
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
					
					<Col></Col>
					<Col>
					    <Dropdown>
					      <Dropdown.Toggle  id="dropdown-basic" className='e-caret-hide' >
					        <MoreVertIcon />
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
			{data != 0 ? <MediaSlider media={data.media} /> : <div></div> }
			</p>
			</Card.Body>

			<Card.Footer>
				<Row>
					<Col>
						<Button onClick={like(false)} variant="secondary"> <ThumbUpAltIcon /> </Button>
					</Col>

					<Col>
						<Button onClick={like(true)} variant="secondary"> <ThumbDownAltIcon /> </Button>
					</Col>

					<Col>
						<Button variant="secondary"> <InsertCommentIcon /> </Button>
					</Col>

					<Col>
						<Button > <ShareIcon /> </Button>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
		);	
}

export default Post;