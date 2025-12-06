import * as React from 'react';

interface Props {
    name: string;
    image: string;
    count: number;
    functionOnClick: (name: string) => void;
}

const IngredientButton: React.FC<Props> = ({ name, image, count, functionOnClick }) => {
	return (
		<>
			<button type='button' onClick={() => functionOnClick(name)}>
				<div>
					<img className='image' src={image} alt={name}/>
					<span>{name}</span>
				</div>
				<span>{count}</span>
			</button>
		</>
	);
};

export default IngredientButton;