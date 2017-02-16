const React = require('react');
const IdyllComponent = require('idyll-component');
const V = require('victory');

const types = {
  LINE: V.VictoryLine,
  BAR: V.VictoryBar,
  SCATTER: V.VictoryScatter
};

class Chart extends IdyllComponent {
  render() {
    const INNER_CHART = types[this.props.type.toUpperCase()];
    return (
      <V.VictoryChart>
        <INNER_CHART data={this.props.data}>
        </INNER_CHART>
      </V.VictoryChart>
    );
  }
}

module.exports = Chart;