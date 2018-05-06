import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchTutor} from '../../actions';
import './Tutor.css';
import {Search} from '../common/Search/Search';

class Tutor extends Component {

    onClick = searchedInput => this.props.searchTutor(searchedInput)

    render() {
        return (
            <div className="Tutor">
              <Search
                placeholder='Find a tutor'
                buttonName='Search'
                onClick={this.onClick}
              />
            </div>
        );
    }
}

export default connect(null,{searchTutor})(Tutor);
