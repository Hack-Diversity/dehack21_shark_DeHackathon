import React, { useState } from 'react';
import ItemCard from './ItemCard';
import FilterForm from './FilterForm';
import './ItemList.css';

let healthDiscount;
const restaurantData = [
  {
    restaurant: 'Sweet Greens',
    dietary: 'Vegetarian',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1730/6943/articles/Sweetgreen2_2048x.png?v=1547130165',
    rating: 4.5,
    time: '25-35 min',
    deliveryFee: 0.99,
    healthDiscount: true,
    menu: [
      {
        name: 'Chicken Pesto Parm',
        price: 12.5,
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
      },
    ],
  },
  {
    restaurant: 'Playa Bowls',
    dietary: 'Vegetarian',
    imageUrl:
      'https://d1ralsognjng37.cloudfront.net/cb0cbe6d-ecdb-4d66-8ec7-d52194489f2e',
    rating: 4.6,
    time: '15-20 min',
    deliveryFee: 0.99,
    healthDiscount: true,
    menu: [
      {
        name: 'Pura Vida',
        price: 13.0,
        healthDiscount: false,
      },
      {
        name: 'coco berry',
        price: 13.0,
        healthDiscount: false,
      },
      {
        name: 'Green bowls',
        price: 14.0,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'Latin Healthy Corner',
    dietary: 'Vegetarian',
    imageUrl:
      'https://d1ralsognjng37.cloudfront.net/9a4c40f8-3344-442a-8e8a-6668150a36f7',
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
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'kwench Juice Cafe',
    dietary: 'Vegan',
    imageUrl:
      'https://d1ralsognjng37.cloudfront.net/f03cf410-ff6d-4944-9c93-fc61e1c1dfc9.jpeg',
    rating: 4.5,
    time: '5-15 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'South Station',
        price: 11.0,
        healthDiscount: false,
      },
      {
        name: 'Green Machine',
        price: 8.0,
        healthDiscount: false,
      },
      {
        name: 'Evolution',
        price: 11.0,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'CocoBeet Boston',
    dietary: 'Vegan',
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82YjEwMjlmMy1lMWFmLTQ0OWQtYmU3MC1mYjIyM2IyYmU1YzYuanBlZw==',
    rating: 4.4,
    time: '15-25 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'Umami bowls',
        price: 13.5,
        healthDiscount: false,
      },
      {
        name: 'Mediterranean Bowl',
        price: 13.5,
        healthDiscount: false,
      },
      {
        name: 'Chickpe Hummus & Avocado Toast',
        price: 12.95,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'GrassHopper',
    dietary: 'Vegan',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCP2vEmS7F2zcYIbNIw-urPmZ5GRXJu9TNQ&usqp=CAU',
    rating: 4.4,
    time: '15-25 min',
    deliveryFee: 0.99,
    healthDiscount: false,
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
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: "Pauli's",
    dietary: 'Gluten-free',
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xYTIyNjgxOC00NDQzLTRhOTUtYTI3ZC0yYjM2Yjc1YjA2MzMuanBlZw==',
    rating: 4.7,
    time: '5-15 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'BLT sandwich on Gluten Free Bread',
        price: 11.99,
        healthDiscount: false,
      },
      {
        name: 'California Chicken on Gluten Free Bread',
        price: 11.99,
        healthDiscount: false,
      },
      {
        name: 'Tuna Salad Sandwich On Slicer Gluten Free Bread',
        price: 11.99,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'La Famiglia Giorgios Resturant',
    dietary: 'Gluten-free',
    imageUrl:
      'https://www.lafamigliagiorgios.com/images/img.jpg',
    rating: 4.5,
    time: '5-15 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
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
      },
    ],
  },
  {
    restaurant: 'Sweetgreen',
    dietary: 'Gluten free',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1730/6943/articles/Sweetgreen2_2048x.png?v=1547130165',
    rating: 4.6,
    time: '30-40 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    Menu: [
      {
        name: 'Harvest bowl',
        price: 12.5,
        healthDiscount: false,
      },
      {
        name: 'Buffalo chicken bow',
        price: 12.5,
        healthDiscount: false,
      },
      {
        name: 'Rustic tomato harvest bowl',
        price: 12.5,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'Royal Punjab',
    dietary: 'Halal',
    imageUrl:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82ZjA0ZDU1YS1iZmJmLTQ3ZDQtYjNlNS03ZmIzYjQ2MGRjZTE=',
    rating: 4.5,
    time: '5-15 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'saag paneer',
        price: 12.95,
        healthDiscount: false,
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
      },
    ],
  },
  {
    restaurant: 'Falafel Place',
    dietary: 'Halal',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/x_Fbr9VM-pitT_6TyQ948q2qL4Y=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7689521/FalafelGuys_All.jpg',
    rating: 4.5,
    time: '15-25 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'Falafel Roll up',
        price: 7.5,
        healthDiscount: false,
      },
      {
        name: ' Chicken Shawarma Roll up',
        price: 9.5,
        healthDiscount: false,
      },
      {
        name: 'Kafta Kabob Roll up',
        price: 11.5,
        healthDiscount: false,
      },
    ],
  },
  {
    restaurant: 'Kabab Corner',
    dietary: 'Halal',
    imageUrl:
      'https://im.whatshot.in/img/2021/Jan/rajwadi-thali-4-min-cropped-1609909891.jpg',
    rating: 4.4,
    time: '15-25 min',
    deliveryFee: 0.99,
    healthDiscount: false,
    menu: [
      {
        name: 'Paneer Tikka Masala',
        price: 14.95,
        healthDiscount: false,
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
      },
    ],
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
    <div className="filter-tab">
      <FilterForm className="filter-form" />
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
