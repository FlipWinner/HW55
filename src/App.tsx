import './App.css';
import { useState } from 'react';
import { INGREDIENTS } from './globalConstants.ts';
import IngredientButton from './components/IngredientButton/IngredientButton.tsx';
import Burger from './components/Burger/Burger.tsx';

const App = () => {
	const [ingredients, setIngredients] = useState([
		{ name: 'Meat', count: 0 },
		{ name: 'Salad', count: 0 },
		{ name: 'Cheese', count: 0 },
		{ name: 'Bacon', count: 0 }
	]);
	const [total, setTotal] = useState(30);

	const calcPrice = () => {
		const totalPrice = ingredients.reduce((acc, item) => {
			const masterIngredient = INGREDIENTS.find(
				(masterItem) => masterItem.name === item.name
			);
            
			if (masterIngredient) {
				acc += item.count * masterIngredient.price;
			}
            
			return acc;
		}, 30);

		setTotal(totalPrice);
	};
    
	const addIngredient = (name: string) => {
		const newIngredients = [...ingredients];
		newIngredients.filter(ingredient => {
			if (ingredient.name === name) {
				ingredient.count++;
				return ingredient;
			}
		});
		setIngredients(newIngredients);
		calcPrice();
	};

	const deleteIngredient = (name: string) => {
		const newIngredients = [...ingredients];
		newIngredients.filter(ingredient => {
			if (ingredient.name === name) {
				ingredient.count = 0;
			}
			return ingredient;
		});
		calcPrice();
		setIngredients(newIngredients);
	};

	return (
		<>
			<div className='App'>
				<div className="main-block-left">
					{INGREDIENTS.map((item, index) => (
						<div className="ingredient-container" key={index}>
							<IngredientButton name={item.name} image={item.image} count={ingredients[index].count} functionOnClick={addIngredient} />
							{ingredients[index].count > 0
                                && <button onClick={() => deleteIngredient(item.name)}>Delete</button>
							}
						</div>
					))}
				</div>
                
				<div className="main-block-right">
					<span>Price: {total}</span>
					<Burger ingredients={ingredients} />
				</div>
			</div>
		</>
	);
};

export default App;
