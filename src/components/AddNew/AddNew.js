import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

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
    return (
      <div >
          {JSON.stringify(this.props.image)}
         <h2>Add image to Favorites</h2>
         <img src={this.props.image.url} alt={this.props.image.title} />
        <button onClick={this.addToFavorites}>Add Favorite</button>
      </div>
    )
  }
}

export default withRouter(connect(reduxState=>({
  image: reduxState.favoriteReducer,
}))(AddNew));
