import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';//se importan así porque hay muchas
import {bindActionCreators} from 'redux';

class BookList extends Component{

  createList(){
    return this.props.books.map((book)=>{
        return (
        <li key={book.title}
        onClick={()=>{this.props.selectBook(book)}}
        className="list-group-item">
          {book.title}{console.log(this.props.active)}
        </li>
      );
    });
  }
  render(){
    return (
      <ul>
        {this.createList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    books:state.books,
    active:state.activeBook
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {selectBook:selectBook}, dispatch
  )
}
export default connect(mapStateToProps,
  mapDispatchToProps)(BookList);
