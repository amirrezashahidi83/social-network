import {useState} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';
import Userdetails from './register/Userdetails';
import Personaldetails from './register/Personaldetails';
import Confirmation from  './register/Confirmation';

const Signup = () =>{
	
	const [step,setStep] = useState(1);

	const PrevStep = ()=>{
		setStep(step - 1);
	}

	const NextStep = () =>{
		setStep(step + 1);
	}

	let page = <Userdetails />;

	if(step == 2)
		page = <Confirmation />;
	else if(step == 3)
		page = <Personaldetails />;

	return (
		<Container>
			<Card>
				<Card.Body>
				{page}		
				</Card.Body>

				<Card.Footer>
					<Row>
						<Col>
							<Button onClick={PrevStep}>Back</Button>
						</Col>
						<Col className='col-10'></Col>
						<Col>
							<Button onClick={NextStep}>Next</Button>
						</Col>

					</Row>
				</Card.Footer>
			</Card>
		</Container>
		);
}

export default Signup;