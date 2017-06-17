import React from 'react';

import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component{

  state ={
    articles: []
  }

  addArticle = (article) =>{
    article.id = Date.now();
    let articles = [...this.state.articles, article];
    this.setState({articles});
  }
  render(){
    return(
      <div>
        <h3>Liste de courses</h3>
        <Form formTitle="Ajouter des articles à acheter" addArticle={this.addArticle}/>
        <ItemList articles={this.state.articles}/>
      </div>
        );
  }
}
export default App;
