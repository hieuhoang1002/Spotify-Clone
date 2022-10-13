import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actions";
import styles from "./styles.module.scss";

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
  }
  render() {
    return (
      <div className={styles.progress}>
        <input
          type="range"
          min="0"
          max="100"
          className={styles.slider}
          value={this.props.volume}
          onChange={(e) => this.props.setVolume(e.target.value)}
          onMouseEnter={() => this.setState({ showTooltip: true })}
          onMouseLeave={() => this.setState({ showTooltip: false })}
        />
        {this.state.showTooltip ? (
          <span className={styles.tooltip}>{this.props.volume}</span>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    volume: state.volume,
  };
};

export default connect(mapStateToProps, { setVolume })(Volume);
