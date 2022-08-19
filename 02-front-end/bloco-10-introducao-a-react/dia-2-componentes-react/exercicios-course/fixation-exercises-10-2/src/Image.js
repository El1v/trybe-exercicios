import React from 'react';

class Image extends React.Component {
  render() {
    return <img source={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;