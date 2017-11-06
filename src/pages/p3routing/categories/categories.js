import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as categoriesActions from './categoriesActions';

export function Categories(props) {
  return <div>
    Select View By Catagory &rarr; (&nbsp;
    { props.categories && props.categories[0] &&
      props.categories.map((category, index) =>
        <span key={index}>
          <button onClick={() => props.onClick(category.name)}>
            {category.name}
          </button>&nbsp;
        </span>)}
      <button onClick={() => props.onClick('all')}>all</button>&nbsp;).
    Presently Viewing {props.category.toUpperCase()} Posts.
  </div>
}

class CategoriesComponent extends Component {
  state = { match :  true }
  categories = [{name: "redux"}, {name: "react"}, {name: "udacity"}];
  componentDidMount = () => {
    this.props.addCategories(this.categories);
    const ending = this.props.history.location.pathname.replace(this.props.url, '').replace('/','');
    let activeCategory = "all";
    if (this.categories.map(c => c.name).includes(ending)) activeCategory = ending;
    else { if (ending !== "") this.setState(state => ({...state, match: false}))}
    this.props.activateCategory(activeCategory);
  }
  onClick = (category) => this.props.activateCategory(category);

  render = () => <div>
    { !this.state.match && <p>Illeagle Category so viewing all</p>}
    <Categories
      categories={this.props.categories}
      onClick={(category) => {
        this.props.activateCategory(category);
        this.setState(state => ({...state, match: true}));
        const url = category === "all" ? "" : category;
        this.props.history.push(`${this.props.url}/${url}`)
      }}
      category={this.props.activeCategory}
      match={this.state.match}
      urlCategory={this.props.urlCategory}
    />
  </div>
}

const mapStateToProps = ({ categoriesState }) => ({ ...categoriesState });
export default connect(mapStateToProps, categoriesActions)(CategoriesComponent);
