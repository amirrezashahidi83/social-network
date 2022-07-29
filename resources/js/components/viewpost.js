import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Post from './Post';

const insertComment = () => {

}

const ViewPost = () => {

	const {post_id} = useParams();

	const loadComments = async ()=>{
		const {data:response} = await axios.get("/api/post/"+post_id+"/comments");
		console.log(response);
	}
	
	loadComments();
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