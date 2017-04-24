import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component{
  render(){
    if(!this.props.active){
      return <div>selecciona un libro para ver los detalles ;)</div>
    }
    return <div>{this.props.active.title}</div>
  }
}

function mapStateToProps(state){
  return{
    active:state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
