import React from 'react';

class Form  extends React.Component{
  state ={
    name: '',
    quantity: 0
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addArticle(this.state);

    this.setState({
      name:'',
      quantity:0
    })
  };

  render(){
    return(
      <div>
        <h3>{this.props.formTitle}</h3>
        <form onSubmit={this.handelSubmit}>
          <input type="number" placeholder="quantité" value={this.state.quantity}
            onChange={
              (e) => this.setState({quantity: e.target.value})
            }/>
          <input type="text" placeholder="article" value={this.state.name}
            onChange={
              (e) => this.setState({name: e.target.value})
            }/>
          <button type="submit">ajouter</button>
        </form>
      </div>
    );
  }
}
export default Form;
