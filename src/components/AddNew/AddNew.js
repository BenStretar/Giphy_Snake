import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class AddNew extends Component {

  state = {
    categories: []
  }

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

  clickCategory = (event, id) => {
    if (this.state.categories.findIndex(val=>val===id)===-1) {     
      this.setState({
        categories: [...this.state.categories, id]
      });
    } else {
      this.setState({
        categories: this.state.categories.filter( val=>val!==id)
      })
    }
  }

  render () {
    return (
      <div >
          {JSON.stringify(this.state.categories)}
          {JSON.stringify(this.props.image.url)}
         <h1>ADD NEW</h1>
         <img src={this.props.image.url} alt={this.props.image.title} />
         {/* <img src={this./> */}
        
         <div>
          {this.props.categories.map( (item,i)=>{
            return <label key={i}><input  type="checkbox" value={item.name} onClick={(event)=>this.clickCategory(event,item.id)}/> {item.name} </label>
          })}
        </div>
        <button onClick={this.addToFavorites}>Add Favorite</button>
      </div>
    )
  }
}

export default withRouter(connect(reduxState=>({
  image: reduxState.favoriteReducer,
  categories: reduxState.categoryReducer
}))(AddNew));
