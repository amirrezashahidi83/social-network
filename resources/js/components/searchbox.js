import Select from 'react-select';
import {useState} from 'react';

const Option = (props) => {
  const {
	data
  } = props
  return (
	<div>
	{data.username}
	</div>
  )
}

const Searchbox = () => {

	const [options,setOptions] = useState([{username:'a'}]);

	const searchOptions = (e) =>{
		if(e.length > 3)
			axios.get('/api/searchuser/'+e)
			.then(
				function(response){
					setOptions(response.data);
				});
	} 

	console.log(options);

	return (<Select components={{Option}} options={options} onInputChange={searchOptions} Searchable={true} />)
}

export default Searchbox;