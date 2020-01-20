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
         <h1>ADD NEW</h1>
         <img src={this.props.image.image_url} alt={this.props.image.title} />
         <br/>
         
        <button onClick={this.addToFavorites}>Add Favorite</button>
      </div>
    )
  }
}

export default withRouter(connect(reduxState=>({
  image: reduxState.favoriteReducer
}))(AddNew));
