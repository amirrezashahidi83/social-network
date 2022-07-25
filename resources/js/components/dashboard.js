import {Container,Row,Col} from 'react-bootstrap';
import Header from './Header';
import Post from './post';
import Searchbox from './Searchbox';

const Dashboard = ()=>{


	return(
		<>
			<Header />
			<Container>
				<Row>
					<Col>
					
					</Col>
					<Post id={2}/>
					<Col>
					</Col>
				</Row>
			</Container>
		</>
		);	
}

export default Dashboard;