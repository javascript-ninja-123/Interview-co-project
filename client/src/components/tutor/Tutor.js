import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchTutor,fetchTutors} from '../../actions';
import './Tutor.css';
import {Search,CARD,List} from '../common';

class Tutor extends Component {

    componentDidMount() {
      this.props.fetchTutors()
    }

    onClick = searchedInput => this.props.searchTutor(searchedInput)

    renderList = () => {
      return this.props.tutorList.reduce((acc,val,index) => {
        const listItem = <CARD key={index}
        header={val.name}
        description={val.email}
        buttonName1='send message'
        buttonName2='remove'
        />
        acc.push(listItem)
        return acc;
      },[])
    }


    render() {
        return (
            <div className="Tutor">
              <Search
                placeholder='Find a tutor'
                buttonName='Search'
                onClick={this.onClick}
              />
              <List>
                {this.renderList()}
              </List>
            </div>
        );
    }
}

const  mapStateToProps = ({search}) =>  {
  const {loading,tutorList,error} = search;
  return{loading,tutorList,error}
}

export default connect(mapStateToProps,{searchTutor,fetchTutors})(Tutor);
