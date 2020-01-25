import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const styles = theme => ({
    input: {
        display: 'none'
    },
  });

class AddNew extends Component {


  goToAddFavorite = () => {
    this.props.history.push('/addNew');
    
  }

  addToFavorites = ()=> {
    console.log('ADD TO FAVORITES');
    let newFavorite = {
      image_url: this.props.image.image_url,
      title: this.props.image.title
    }
    this.props.dispatch({type: 'ADD_NEW_FAVORITE', payload: newFavorite});
    this.props.history.push('/admin');
  }

  render () {
    const {classes} = this.props;
    return (
      <div >
          {/* {JSON.stringify(this.props.image.title)} */}
         <h2>Add to Game</h2>
        <p>You are looking at: {this.props.image.title}</p>
         <img src={this.props.image.image_url} alt={this.props.image.title} width="500" height="450"/><br/>
        <Button variant="outlined" className={classes.button} onClick={this.addToFavorites}>Add</Button>
      </div>
    )
  }
}

export default withRouter(connect(reduxState=>({
  image: reduxState.favoriteReducer,
}))(withStyles(styles)(AddNew)));
