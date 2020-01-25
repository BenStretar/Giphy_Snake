import React, { Component } from 'react'
import { connect } from 'react-redux';
import GifCard from '../GifCard/GifCard';
import {withStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
      button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none'
    },
  });

class addGifPage extends Component {
    
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log('in handleChange:', event.target.value)
    }

    searchForGif = ()=>{
        this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
    }

    goHome = ()=>{
        this.props.history.push('/admin')
    }
   
    render() {
        return (
            <div>
                {/* <h1>Search for an Image</h1> */}
                <TextField 
                    id="outlined-name"
                    label="search" 
                    type="text" onChange={(event)=>this.handleChange(event)} 
                    value={this.state.search}
                    margin="normal"
                    variant="outlined"
                /> <br/>

                <Button variant="outlined" onClick={this.goHome}>Cancel</Button>
                <Button color="secondary" variant="contained" onClick={this.searchForGif}>Search</Button>
                                                
                    {/* display 12 gifs that the user searched for */}
                    {/* {JSON.stringify(this.props.images)} */}
                    <div className="pictureBox">
                        {this.props.images.map( (item,i)=> {     
                        return <GifCard key={i} image={item} page='search'/>
                        })}
                    </div>
            </div>
        )
    }
}

export default connect(reduxState=>({images: reduxState.searchReducer}))(withStyles(styles)(addGifPage));