import React, { Component } from 'react';

function P4fetch({ hits, isLoading, error, ...others }) {
  return (<div>
    {error
      ? <p>{error}</p>
      : isLoading
        ? <p>Loading data...</p>
        : hits.map(hit => <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>)}
  </div>);
}

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    state = {
      hits: [],
      isLoading: false,
      error: false,
    };

    componentDidMount() {
      this.setState({isLoading: true});
      fetch(url)
        .then(response => {
          if (response.ok) return response.json();
          else throw new Error('Fetch failed ...');
         })
        .then(data => this.setState({ hits: data.hits, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return (<div>
        <Comp { ...this.state } { ...this.props } />
      </div>);
    }
  }

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react-router';
const AppWithFetching = withFetching(API + DEFAULT_QUERY)(P4fetch);

function P4fetchComponent () {
  return (<AppWithFetching />);
}
export default P4fetchComponent;
