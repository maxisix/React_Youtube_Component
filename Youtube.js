/*------------------------------------*\
  #DEPENDENCIES
\*------------------------------------*/

import React, { Component } from 'react';



/*------------------------------------*\
  #MODULE
\*------------------------------------*/

export class Youtube extends Component {

  static defaultProps = {
    autoPlay: 'false',
    width: '560',
    height: '315',
  }

  static propTypes = {
    autoPlay: React.PropTypes.string,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    videoId: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div style={styles.videoWrapper} className="videoWrapper">
        <iframe style={styles.videoIframe} className="videoIframe" width={this.props.width} height={this.props.height} src={"https://www.youtube.com/embed/" + this.props.videoId + "?autoplay=" + this.props.autoPlay } frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }

}



/*------------------------------------*\
  #CSS STYLES
\*------------------------------------*/

const styles = {

  videoWrapper: {
    position: 'relative',

    paddingBottom: '56.25%', /* ratio 16:9 */
    height: '0',
    maxWidth: '100%',
    overflow: 'hidden'
  },

  videoIframe: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  }
};
