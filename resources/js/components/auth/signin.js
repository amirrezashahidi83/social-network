import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const SignIn = () =>{
		const navigate = useNavigate();

	const checkLogin = (e) =>{
		e.preventDefault();

		let username = '';
		let password = '';

		axios.post('/api/login',{username:username,password:password})
		.then(function(response){
		})
		.catch(function(error){
			navigate("/dashboard");

		})
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<Form>
						<Button onClick={checkLogin}></Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
		);
}

export default SignIn;