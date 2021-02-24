/* eslint-disable semi */
import React, {useEffect,useState} from 'react';
import mainImage from './imgs/3.webp';

import ItemCard from '../pages/ItemCard';
import '../pages/ItemList.css';
import axios from "axios";

const Welcome = props => {


	const [loadedBooks, setLoadedBooks] = useState();

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/books`
				);
				console.log(response);
				setLoadedBooks(response.data.books);
			} catch (error) {
				console.log("error");
			}
		};
		fetchBooks();
	}, []);

        // {/* <img src={mainImage} alt="coffe shop image"/> */}
	return (
		<React.Fragment>
    <div className="welcome--container">
        <h2 className="welcome--message-text">Welcome to Shark Coffe</h2>
        <p className="welcome--description-text">Drink Coffe, read, drink coffe, read, repeat</p>
        <h3 className="welcome--message-text">Top 100 Books</h3>
			{loadedBooks && (
                <div className="list-container">
          <ul className="item-list">
            {loadedBooks.slice(0,99).map(item => (
                <ItemCard
                key={item._id}
                image={item.image_url_m}
                id={item._id}
                title={item.title}
                author={item.author}
                publication_year={item.publication_year}
                isbn={item.isbn}
                copies={item.copies}
                />
                ))}
          </ul>
        </div>
			)}
            </div>
		</React.Fragment>
	);
};
export default Welcome;