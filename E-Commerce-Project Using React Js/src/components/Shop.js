import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(2),
      minHeight: '100vh',
    },
    paper: {
      padding: theme.spacing(2),
      borderRadius: 10,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
    },
    form: {
      maxWidth: 500,
      margin: 'auto',
      textAlign: 'center',
    },
    formHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    formLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
    formInput: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.palette.grey[100],
      borderRadius: 5,
      fontSize: 18,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      border: 'none',
    },
    submitButton: {
      backgroundColor: '#5a2c0e',
      color: '#fff',
      borderRadius: 5,
      fontSize: 18,
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
      '&:hover': {
        backgroundColor: '#38170b',
      },
    },
    product: {
      padding: theme.spacing(2),
      borderRadius: 10,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
      margin: theme.spacing(5),
      maxWidth: 500,
    },
    productImage: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
      borderRadius: 5,
      marginBottom: theme.spacing(2),
    },
    productName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    productDescription: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    productPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    orderButton: {
      backgroundColor: '#5a2c0e',
      color: '#fff',
      borderRadius: 5,
      fontSize: 18,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      '&:hover': {
        backgroundColor: '#38170b',
      },
    },
  }));
  
  const products = [  {    name: 'Coffee',    description: 'Choose your size: Small/Medium/Large',    price: '$2.99 - $4.99',    image: 'https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=900&t=st=1683268015~exp=1683268615~hmac=22178178f111613f98be001024c44a5fca83a135fb0102fddae40309d1c3da3e',  },  
  {    name: 'Sandwiches',    description: 'Delicious sandwiches with your favorite fillings',    price: '$6.99',    image: 'https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?w=1060&t=st=1683268095~exp=1683268695~hmac=e4ac7fedbeae9fb3075ab830ee0e637c2845694db5457abc449a76e40ba98b00',  },  
  {    name: 'Fries',    description: 'Crispy and golden fries to go with your burger', price: '$3.99', image: 'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=1060&t=st=1683268125~exp=1683268725~hmac=9342976128d0651d1cadcdfa5cbb1ede5da7cc0b3563f577e51405364a1902b6',
  },
  {
  name: 'Pizza',
  description: 'Your favorite toppings on a fresh and hot pizza',
  price: '$12.99',
  image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1060&t=st=1683268198~exp=1683268798~hmac=53b3aabd01198edec1efde8c7a5614061eb211dba26c2af406884bcd669a1b6e',
  },
  {
  name: 'Burgers',
  description: 'Choose your patty: Beef/Chicken/Veggie',
  price: '$8.99',
  image: 'https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=1060&t=st=1683268224~exp=1683268824~hmac=4e05002da8e4bf832cf2c9bf05df62417126808906c9c9a1400c65659a51a461',
  },
  ];

const Shop = () => {

    

    const classes = useStyles();

const handleSubmit = (event) => {
event.preventDefault();
// handle form submission
};

const handleOrder = (product) => {
// handle product order
};

  return (
    <div className={classes.root}>
        
<Grid container justify="center">
<Grid item xs={12} sm={8}>
<Paper className={classes.paper}>
<form className={classes.form} onSubmit={handleSubmit}>
<Typography className={classes.formHeading}>Order Form</Typography>
<label htmlFor="name" className={classes.formLabel}>Name</label>
<input id="name" type="text" className={classes.formInput} required />
<label htmlFor="email" className={classes.formLabel}>Email</label>
          <input id="email" type="email" className={classes.formInput} required />

          <label htmlFor="phone" className={classes.formLabel}>Phone</label>
          <input id="phone" type="tel" className={classes.formInput} required />

          <Button type="submit" className={classes.submitButton}>Submit</Button>
        </form>
      </Paper>
    </Grid>
  </Grid>

  <Grid container justify="center">
    {products.map((product, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper className={classes.product}>
          <img src={product.image} alt={product.name} className={classes.productImage} />
          <Typography className={classes.productName}>{product.name}</Typography>
          <Typography className={classes.productDescription}>{product.description}</Typography>
          <Typography className={classes.productPrice}>{product.price}</Typography>
          <Button onClick={() => handleOrder(product)} className={classes.orderButton}>Order</Button>
        </Paper>
      </Grid>
    ))}
  </Grid>
</div>

  )
}

export default Shop
