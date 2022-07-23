import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';

const Confirmation = () =>{

	const checkSignUp = (e)=>{
		let email = '';
		let username = '';
		let password = '';

		axios.post("/api/register",{})
		.then(function(response) {
			
		})
		.catch(function(response){

		})
	}

	return (
		<Form>
			<Form.Group>
				<Form.Control />
				<Button onClick={checkSignUp}></Button>
			</Form.Group>
		</Form>
		);
}

export default Confirmation;