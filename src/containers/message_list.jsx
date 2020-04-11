import React from 'react';
import Message from '../components/message';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setFlats } from '../actions'


class FlatList extends Component {

  componentWillMount() {
   // TODO: dispatch an action to load flats!
   this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  return {
    flats: state.flats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);

