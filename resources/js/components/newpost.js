
const NewPost = () =>{

	const onClick = () =>{
		let media = [{id:1,type:'image',path:'/images/'} , {id:2,type:'image',path:'/images/'}];
		axios.post('/api/post/new',{discussion:'kos',media:media,sender_id:1})
		.then(function(response){

		})
		.catch(function(error){

		});
	}

	onClick();
	return (
		<div>
		</div>

		);
}
export default NewPost;	