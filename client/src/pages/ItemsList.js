import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import FilterForm from './FilterForm';
import './ItemList.css';
import axios from "axios";


const restaurantData = [
	{
		restaurant: 'Sweet Greens',
		dietary: 'Vegetarian',
		imageUrl: 'https://cdn.shopify.com/s/files/1/1730/6943/articles/		Sweetgreen2_2048x.png?v=1547130165',
		rating: 4.5,
		time: '25-35 min',
		deliveryFee: 0.99,
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
			rating: 4.6',
			time: '15-20 min',
			deliveryFee: 0.99,
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
		menu: [
			{
				name: 'Umami bowls',
				price: 13.50,
				healthDiscount: false,
			},
			{
				name: 'Mediterranean Bowl',
				price: 13.50,
				healthDiscount: fa;se
			},
			{
				name: 'Chickpe Hummus & Avocado Toast',
				price: 12.95,
				healthDiscount: false,
			}
		]
	},
	{
		restaurant: 'GrassHopper',
		dietary: 'Vegan',
		imageUrl: '',
		rating: 4.4,
		time: '15-25 min',
		deliveryFee: 0.99,
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
		restaurant: 'Pauli's',
		dietary: 'Gluten-free',
		imageUrl: '',
		rating: 4.7,
		time: '5-15 min',
		deliveryFee: 0.99,
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
				name: 'Pasta Carbonara'
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

	return (
		<React.Fragment>
			<FilterForm />
			{loadedBooks && (
				<div className="list-container">
					<ul className="item-list">
						{loadedBooks.map(item => (
							<ItemCard
								key={item._id}
								id={item._id}
								image={item.image_url_m}
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
		</React.Fragment>
	);
};

export default ItemList;








// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { useTable } from 'react-table';
// import * as actions from '../actions';
// import { DeleteButton } from '../components/buttons';
// import ItemCard from './ItemCard';

// import MaUTable from '@material-ui/core/Table';
// import { CssBaseline, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// import styled from 'styled-components';

// const Wrapper = styled.div`
//   padding: 0 40px 40px 40px;

//   @media screen and (max-width: 420px) {
//     padding-left: 0.5em;
//     padding-right: 0.5em;
//   }
// `;

// const Table = ({ columns, data }) => {
//   const { getTableProps, headerGroups, rows, prepareRow } = useTable({
//     columns,
//     data,
//   });

//   return (
//     <MaUTable {...getTableProps()}>
//       <TableHead>
//         {headerGroups.map(headerGroup => (
//           <TableRow {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableHead>
//       <TableBody>
//         {rows.map((row, i) => {
//           prepareRow(row);
//           return (
//             <TableRow data-row-item-id={row.values._id} {...row.getRowProps()}>
//               {row.cells.map(cell => {
//                 return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
//               })}
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </MaUTable>
//   );
// };

// class ItemsTable extends Component {
//   componentDidMount() {
//     console.log('ItemsList: props');
//     console.log(this.props);
//     // if (((this.props.itemData || {}).items || []).length) return;

//     this.props.fetchAllItems();
//   }

//   handleRemoveItem = data => {
//     const itemId = data;

//     this.props.deleteSingleItem(itemId).then(resp => {
//       console.log('handleRemoveItem: resp');
//       console.log(resp);
//       this.props.fetchAllItems();
//     });
//   };

//   render() {
//     const { items, loaded, loading } = this.props.itemData || {};
//     console.log(items);

//     const columns = [
//       {
//         Header: 'ID',
//         accessor: '_id',
//         // filterable: true,
//         Cell: props => {
//           console.log(props);
//           const { original } = props.cell.row;
//           return <span data-item-id={original._id}>{props.value}</span>;
//         },
//       },
//       {
//         Header: 'Name',
//         accessor: 'name',
//         // filterable: true,
//         Cell: props => {
//           const { original } = props.cell.row;
//           return <span data-name={original.name}>{props.value}</span>;
//         },
//       },
//       {
//         Header: 'Day(s)',
//         accessor: 'daysOfWeek',
//         // filterable: true,
//         Cell: props => {
//           const { daysOfWeek } = props.cell.row.original;
//           let daysToDisplay = '';
//           if (daysOfWeek && typeof daysOfWeek === 'object') {
//             for (const day in daysOfWeek) {
//               daysToDisplay =
//                 daysToDisplay === '' ? daysOfWeek[day] : `${daysToDisplay}, ${daysOfWeek[day]}`;
//             }
//           }
//           return (
//             <span
//               data-daysofweek={daysOfWeek && JSON.stringify(daysOfWeek)}
//               data-daysofweek-by-id={props.value}>
//               {daysToDisplay || '-'}
//             </span>
//           );
//         },
//       },
//       {
//         Header: 'Timeframe',
//         accessor: 'timeframeNote',
//         Cell: props => {
//           const { original } = props.cell.row;
//           return <span data-timeframe={original.timeframeNote}>{props.value || '-'}</span>;
//         },
//       },
//       {
//         Header: 'Priority',
//         accessor: 'priority',
//         // filterable: true,
//         Cell: props => {
//           const { original } = props.cell.row;
//           return <span data-priority={original.priority}>{props.value}</span>;
//         },
//       },
//       {
//         Header: 'Update',
//         accessor: '_update',
//         Cell: props => {
//           const { original } = props.cell.row;
//           return (
//             <Link data-update-id={original._id} to={`/item/update/${props.value}`}>
//               Update Item
//             </Link>
//           );
//         },
//       },
//       {
//         Header: 'Delete',
//         accessor: '_delete',
//         Cell: props => {
//           const { original } = props.cell.row;
//           return (
//             <span data-delete-id={original._id}>
//               <DeleteButton id={original._id} onDelete={this.handleRemoveItem} />
//             </span>
//           );
//         },
//       },
//     ];

//     return (
//       <Wrapper>
//         <CssBaseline />
//         {(items || []).length > 0 ? (
//           <Table data={items} columns={columns} />
//         ) : (
//           `No items to render... :(`
//         )}
//       </Wrapper>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     ...state,
//   };
// };

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
