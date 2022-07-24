import Carousel from 'react-bootstrap/Carousel';

const MediaSlider = ({media}) => {

	media = JSON.parse(media);
	console.log(media);
	let MediaItems = media.map((data)=>{
		return(
		<Carousel.Item key={data.id}>
			{data.type == 'image'?
				<img src={data.path} />
				:
				<video>
					<source src={data.path}/>
				</video>

			}
		</Carousel.Item>
		);
	});

	console.log(MediaItems);

	return (
		<Carousel>
			{MediaItems}
		</Carousel>
		);
	
}
export default MediaSlider;