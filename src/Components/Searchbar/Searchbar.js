import React from 'react';
import PropTypes from 'prop-types';


class Searchbar extends React.Component {
  state = { searchQuery: '' };
  
  handleInput = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="Button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            value={this.state.searchQuery}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  };
};


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default Searchbar;