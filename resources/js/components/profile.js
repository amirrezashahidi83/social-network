import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

function follow()
{
	
}

function unfollow()
{

}

const Profile = () =>{

	const {id} = useParams();
	const [data,setData] = useState([]);
	useEffect(()=>{
			const fetchData = async ()=>{
				const {data: response} = await axios.get('/api/user/'+id);
				setData(response);
			}
			fetchData();
		
		},[]);
	
	return (<div>{data.username}</div>);
}

export default Profile;

