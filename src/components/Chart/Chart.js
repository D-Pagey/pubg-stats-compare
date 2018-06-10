import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import './Chart.css';

export default class Chart extends Component {

    node = React.createRef();

    componentDidMount() {
      this.createChart()
    }

    componentDidUpdate() {
      this.createChart()
    }

    createChart = () => {
        const xScale = scaleLinear()
            .domain([0, max(this.props.data)])
            .range([0, this.props.size[0]])

        select(this.node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
         
        select(this.node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
         
        select(this.node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', 'green')
            .attr('x', d => xScale(d)- this.props.size[1])
            .attr('y', (d,i) => i * 100)
            .attr('width', d => xScale(d))
            .attr('height', 50)
   }
    
   render() {
      return <svg ref={node => this.node = node} className='svg'
      width={500} height={500}>
      </svg>
   }
}


