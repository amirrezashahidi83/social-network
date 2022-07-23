import {useState,useEffect} from 'react';
import {Container,Card,Image,Row,Col,Nav,Form,Button,Tab,Tabs} from 'react-bootstrap';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Userdetails from './register/Userdetails';
import Personaldetails from './register/Personaldetails';
import Confirmation from  './register/Confirmation';

const Signup = () =>{
	
	const [step,setStep] = useState(0);

	const PrevStep = ()=>{
		setStep((prevStep) => step - 1);
	}

	const NextStep = () =>{
		setStep((prevStep) => step + 1);
	}

	let page = <Userdetails />;

	if(step == 1)
		page = <Confirmation />;
	else if(step == 2)
		page = <Personaldetails />;

	return (
		<Container>
			<Card>
				<Card.Body>
					<Stepper activeStep={step} alternativeLabel>
		    			<Step >
		      				<StepLabel>Details</StepLabel>
		    			</Step>
		    			<Step >
		      				<StepLabel>Confirmation</StepLabel>
		    			</Step>
		    			<Step >
		      				<StepLabel>Personal</StepLabel>
		    			</Step>
					</Stepper>

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