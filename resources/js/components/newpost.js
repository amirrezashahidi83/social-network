import {Form,Card,Row,Col} from 'react-bootstrap';

import Textarea from 'react-textarea-autosize';

import ImageEditor from 'react-avatar-editor'

import IconButton from '@mui/material/IconButton';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import VideoCallIcon from '@mui/icons-material/VideoCall';

const NewPost = () =>{

	const onClick = () =>{
		let media = [{id:1,type:'image',path:'/images/'} , {id:2,type:'image',path:'/images/'}];
		axios.post('/api/post/new',{content:'kos',media:media,sender_id:1})
		.then(function(response){

		})
		.catch(function(error){

		});
	}

	onClick();
	return (
			<Card>
				<Card.Body>
					<Textarea>
					</Textarea>
				</Card.Body>
				<Card.Footer className='bg-light'>
					<Row>
						<Col>
							<IconButton><AddPhotoAlternateIcon /> add photo </IconButton>
						</Col>

						<Col>
							<IconButton><VideoCallIcon /> add video </IconButton>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		);

}
export default NewPost;	