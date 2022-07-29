
const Userheader = ({id})=>{

	const [data,setData] = useState({});

	useEffect(()=>{
		axios.get('/api/user/'+id)
		.then(function(response){
			setData(response.data);
		});
	},[]);
	
	return (
		<Row>
			<Col className='col-4'>
				<Avatar imageSrc={data.profile} />
			</Col>

			<Col>
				<Row>
					<Col>
						{data.displayname}
					</Col>
				</Row>
				<Row>
					<Col>
						{data.username}
					</Col>
				</Row>
			</Col>
		</Row>
		);
}

export default Userheader;