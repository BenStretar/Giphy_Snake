import React, { Component } from 'react';
import { connect } from 'react-redux';
import Linkify from 'react-linkify';
// import './Admin.css';
import {withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import 'typeface-roboto';

const styles = theme => ({
    table: {
      minWidth: 500,
    },
    input: {
        display: 'none'
    },
  });

// only an user with admin status will see this page
class AdminPage extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAVORITE_LIST'})
      }

    goToAddGifPage = () => {
        //console.log('clicked')
        this.props.history.push('/addGif');
    }

    deleteRow = (id) =>{
        console.log('in delete row')
        this.props.dispatch({ type: 'DELETE_FAVORITE', payload: id})
    }

    editTitle = (id) =>{
        console.log('clicked edit button')
        this.props.history.push(`/edit/${id}`)
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                {/* {JSON.stringify(this.props.favoriteImages)}  */}
                <h1>Admin Home</h1>                
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow><TableCell>id</TableCell><TableCell>Image Title</TableCell></TableRow>
                        </TableHead>
                        {/* <TableRow /> */}
                        <TableBody>
                        {this.props.favoriteImages.map( (item)=> {     
                            return( 
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.title}<br/><Linkify>{item.url}</Linkify></TableCell> {/* will add toggle feature to show/ hide url */}
                                    <TableCell><Button color="primary" onClick={() => this.editTitle(item.id)}>Edit</Button>
                                    <IconButton color="secondary" aria-label="Delete" onClick={() => this.deleteRow(item.id)}><DeleteIcon /></IconButton></TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                <section>
                    <br/>
                     <Button variant="contained"  onClick={this.goToAddGifPage}>Add Gif</Button>
                </section> 
                <br />
            </div>
        )
    }
}

export default connect(reduxState=>({
    favoriteImages: reduxState.favoriteListReducer
}))(withStyles(styles)(AdminPage));