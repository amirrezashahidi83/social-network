import {Tab,Row,Col,Nav} from 'react-bootstrap';

const Settings = ()=>{
	return(
			<Tab.Container>
				<Row>
				<Col>
				    <Nav variant="pills" className="flex-column">
            			<Nav.Item>
              				<Nav.Link eventKey="first" href="#">
                				Tab 1
              				</Nav.Link>
            			</Nav.Item>
            			<Nav.Item>
              				<Nav.Link eventKey="second" href="#">
                				Tab 2
              				</Nav.Link>
            			</Nav.Item>
          			</Nav>
				</Col>
				<Col>
					<Tab.Content>
						<Tab.Pane>
						</Tab.Pane>
						<Tab.Pane>
						</Tab.Pane>
					</Tab.Content>
				</Col>
				</Row>

			</Tab.Container>
		);
}
export default Settings;