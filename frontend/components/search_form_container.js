import {updateFilters} from "../actions/filter_actions";
import React from 'react';
import SearchForm from './search_form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateFilter} from "../actions/filter_actions";

const msp = (state, ownProps) => ({
});

const mdp = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(msp, mdp)(SearchForm));