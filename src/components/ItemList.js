import React from 'react';

const ItemList = (props) => {
  return (
    <div>
      {
        props.articles.map(article => <div key={article.id}>{article.name}</div>)
      }
    </div>
  );
};

export default ItemList;


/*
{
  type: 'ADD_ARTICLE',
  playload : {
  id: 1,
  quantity: 2,
  name: 'coca'
  }
}
{
  type: 'ADD_ARTICLE',
  playload : article
}
{
  type: 'EDIT_ARTICLE',
  playload : article
}


let state ={
  articles: []
}

let addArticleReducer = (state, action) =>{
  return newState;
}


*/
