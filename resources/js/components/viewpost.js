import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Post from './Post';

const ViewPost = () => {

	const {post_id} = useParams();
	return (
			<div>
			<Container>
				<Row className=''>
				<Col>
					<Post id={post_id} />
				</Col>
				<Col></Col>
				</Row>
			</Container>
			</div>
		);
}
export default ViewPost;