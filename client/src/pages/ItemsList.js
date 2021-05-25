import React, { useState } from 'react';
import ItemCard from './ItemCard';
import FilterForm from './FilterForm';
import './ItemList.css';

let healthDiscount;
const restaurantData = [
	{
		restaurant: 'Sweet Greens',
		dietary: 'Vegetarian',
		imageUrl: 'https://cdn.shopify.com/s/files/1/1730/6943/articles/		Sweetgreen2_2048x.png?v=1547130165',
		rating: 4.5,
		time: '25-35 min',
		deliveryFee: 0.99,
		healthDiscount: true,
		menu: [
			{
				name: 'Chicken Pesto Parm',
				price: 12.50,
				healthDiscount: false,
			},
			{
				name: 'Guacamole Greens',
				price: 11.99,
				healthDiscount: false,
			},
			{
				name: ' Kale Caesar',
				price: 11.95,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Playa Bowls',
		dietary: 'Vegetarian',
		imageUrl: '',
		rating: 4.6,
		time: '15-20 min',
		deliveryFee: 0.99,
		healthDiscount: true,
		menu: [
			{
				name: 'Pura Vida',
				price: 13.00,
				healthDiscount: false,
			},
			{
				name: 'coco berry',
				price: 13.00,
				healthDiscount: false,
			},
			{
				name: 'Green bowls',
				price: 14.00,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Latin Healthy Corner',
		dietary: 'Vegetarian',
		imageUrl: '',
		rating: 4.5,
		time: '20-30 min',
		deliveryFee: 0.99,
		healthDiscount: true,
		menu: [
			{
				name: 'Santa Fe',
				price: 10.95,
				healthDiscount: false,
			},
			{
				name: 'Salvador quinoa',
				price: 10.95,
				healthDiscount: false,
			},
			{
				name: 'La Cruz Salad',
				price: 8.95,
				healthDiscount: false
			}
		]
	},
	{
		restaurant: 'kwench Juice Cafe',
		dietary: 'Vegan',
		imageUrl: '',
		rating: 4.5,
		time: '5-15 min',
		deliveryFee: 0.99,
		healthDiscount: false,
		menu: [
			{
				name: 'South Station',
				price: 11.00,
				healthDiscount: false,
			},
			{
				name: 'Green Machine',
				price: 8.00,
				healthDiscount: false,
			},
			{
				name: 'Evolution',
				price: 11.00,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'CocoBeet Boston',
		dietary: 'Vegan',
		imageUrl: '',
		rating: 4.4,
		time: '15-25 min',
		deliveryFee: 0.99,
		healthDiscount: false,
		menu: [
			{
				name: 'Umami bowls',
				price: 13.50,
				healthDiscount: false,
			},
			{
				name: 'Mediterranean Bowl',
				price: 13.50,
				healthDiscount: false
			},
			{
				name: 'Chickpe Hummus & Avocado Toast',
				price: 12.95,
				healthDiscount: false,
			}
		]
	}
	,
	{
		restaurant: 'GrassHopper',
		dietary: 'Vegan',
		imageUrl: '',
		rating: 4.4,
		time: '15-25 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'The No Name',
				price: 16.15,
				healthDiscount: false,
			},
			{
				name: 'The Sweet and Sour Sensation',
				price: 16.15,
				healthDiscount: false,
			},
			{
				name: 'Sauteed Asparagus',
				price: '14.04',
				healthDiscount: false
			}
		]
	},
	{
		restaurant: 'Pauli\'s',
		dietary: 'Gluten-free',
		imageUrl: '',
		rating: 4.7,
		time: '5-15 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'BLT sandwich on Gluten Free Bread',
				price: 11.99,
				healthDiscount: false
			},
			{
				name: 'California Chicken on Gluten Free Bread',
				price: 11.99,
				healthDiscount: false
			},
			{
				name:'Tuna Salad Sandwich On Slicer Gluten Free Bread',
				price: 11.99,
				healthDiscount: false
			}
		]
	},
	{
		restaurant: 'La Famiglia Giorgios Resturant',
		dietary: 'Gluten-free',
		imageUrl: '',
		rating: 4.5,
		time: '5-15 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu:[
			{
				name: 'Walnut and Gorgonzola ',
				price: 11.99,
				healthDiscount: false,
			},
			{
				name: ' Chicken caesar',
				price: 11.99,
				healthDiscount: false,
			},
			{
				name: 'Pasta Carbonara',
				price: 15.99,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Sweetgreen',
		dietary: 'Gluten free',
		imageUrl: '',
		rating: 4.6,
		time: '30-40 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		Menu: [
			{
				name: 'Harvest bowl',
				price: 12.50,
				healthDiscount: false,
			},
			{
				name :'Buffalo chicken bow',
				price: 12.50,
				healthDiscount: false,
			},
			{
				name: 'Rustic tomato harvest bowl',
				price: 12.50,
				healthDiscount: false
			}
		]
	},
	{
		restaurant: 'Royal Punjab',
		dietary: 'Halal',
		imageUrl: '',
		rating: 4.5,
		time: '5-15 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'saag paneer',
				price: 12.95,
				healthDiscount: false
			},
			{
				name: ' Chicken Tandoori',
				price: 12.95,
				healthDiscount: false,
			},
			{
				name: 'Butter Chicken',
				price: 13.95,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Falafel Place',
		dietary: 'Halal',
		imageUrl: '',
		rating: 4.5,
		time: '15-25 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'Falafel Roll up',
				price: 7.50,
				healthDiscount: false
			},
			{
				name: ' Chicken Shawarma Roll up',
				price: 9.50,
				healthDiscount: false,
			},
			{
				name: 'Kafta Kabob Roll up',
				price: 11.50,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Kabab Corner',
		dietary: 'Halal',
		imageUrl: '',
		rating: 4.4,
		time: '15-25 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'Paneer Tikka Masala',
				price: 14.95,
				healthDiscount: false
			},
			{
				name: 'Vegetable Biryani',
				price: 13.95,
				healthDiscount: false,
			},
			{
				name: 'Aloo Gobhi',
				price: 14.95,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'Cibo Cafe & Bistro',
		dietary: 'Allergy friendly',
		imageUrl: '',
		rating: 4.4,
		time: '15-25 min',
		deliveryFee: 0.99,
		healthDiscount : false,
		menu: [
			{
				name: 'Saltimbocca Sandwich',
				price: 11.99,
				healthDiscount: false
			},
			{
				name: 'Pesto Chicken Sandwich',
				price: 11.99,
				healthDiscount: false,
			},
			{
				name: 'Turkey Avocado Club sandwich',
				price: 10.99,
				healthDiscount: false,
			}
	]
	},
];

const ItemList = props => {
	// const [discount, setDiscount] = useState({ healthDiscount: false });
	// const [discount, setDiscount] = useState(false);

	// const handleCheckDiscount = (dietaryCategory, discountCategory) => {
	// 	if (dietaryCategory === discountCategory) {
	// 		setDiscount({ healthDiscount: true });
	// 		setDiscount(() =>
	// 		healthDiscount.filter((post) => post.id !== deletedPlaceId)
	// 	);
	// 	}
	// };

	return (
		<div className='filter-tab'>
			<FilterForm className='filter-form' />
			<div className="list-container">
				<ul className="item-list">
					{restaurantData.map((item, idx) => (
						<ItemCard
							key={idx}
							id={idx}
							image={item.imageUrl}
							title={item.restaurant}
							dietary={item.dietary}
							rating={item.rating}
							time={item.time}
							deliveryFee={item.deliveryFee}
							menu={item.menu}
							discount={item.healthDiscount}

							// discount={!!discount.healthDiscount}
							// discount={discount}
							// healthDiscount={discount.healthDiscount}
							// onDiscount={handleCheckDiscount}
						// menu={item.menu.map((menuItem,id) => (
						// 	menuItem
						// 	))}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ItemList;




