import {useParams} from 'react-router-dom';

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
			</div>
		);
}
export default ViewPost;