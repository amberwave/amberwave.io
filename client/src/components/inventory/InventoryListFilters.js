import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByDataType,
  sortByLocation,
  sortByStatus,
  sortByType,
  sortByName,
} from '../../actions/filterActions';

export class InventoryListFilters extends Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'name':
        this.props.sortByName();
        break;
      case 'date':
        this.props.sortByDate();
        break;
      case 'type':
        this.props.sortByType();
        break;
      case 'location':
        this.props.sortByLocation();
        break;
      case 'status':
        this.props.sortByStatus();
        break;
      case 'dataType':
        this.props.sortByDataType();
        break;
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="type">Type</option>
          <option value="status">Status</option>
          <option value="dataType">Data Type</option>
          <option value="date">Date</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByName: () => dispatch(sortByName()),
  sortByDate: () => dispatch(sortByDate()),
  sortByStatus: () => dispatch(sortByStatus()),
  sortByType: () => dispatch(sortByType()),
  sortByLocation: () => dispatch(sortByLocation()),
  sortByDataType: () => dispatch(sortByDataType()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryListFilters);
