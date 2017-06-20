import React from 'react';

import Form from './Form';
import ItemList from './ItemList';

import {connect} from 'react-redux';

class App extends React.Component{

  state ={
    articles: []
  };

  /*addArticle = (article) =>{
    article.id = Date.now();
    let articles = [...this.state.articles, article];
    this.setState({articles});
  }*/
/*
  addArticle = (article) => {
    //this.props.dispatch({type: 'ADD_ARTICLE',payload: article})
    this.props.addArticle(article);
  };*/
  render(){
    return(
      <div>
        <h3>Liste de courses</h3>
        <Form formTitle="Ajouter des articles à acheter" addArticle={this.props.addArticle}/>
        <ItemList articles={this.props.articles}/>
      </div>
        );
  }
}
const mapStateToProps = (state) => {
  return{
    articles: state.articles
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    addArticle: (article) => {
      dispatch({
        type: 'ADD_ARTICLE',
        payload: article
      })
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
