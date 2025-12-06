import * as React from 'react';

interface Props {
    ingredients: {name:string, count:number}[];
}

const Burger: React.FC<Props> = ({ ingredients }) => {
	return (
		<>
			<div className="Burger">
				<div className="BreadTop">
					<div className="Seeds1"></div>
					<div className="Seeds2"></div>
				</div>
				{  
					ingredients.map((ingredient, index) => {
						return Array.from({ length: ingredient.count }).map((_, i) => (
							<div key={i + index} className={ingredient.name}></div>
						));
					})
				}
				<div className="BreadBottom"></div>
			</div>
		</>
	);
};

export default Burger;