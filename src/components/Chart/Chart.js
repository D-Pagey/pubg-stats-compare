import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
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
        .range([0, this.props.size[0] - 50])

        const xAxis = axisBottom(xScale);



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
            .attr('x', 0)    
            .attr('y', (d, i) => i * 60)
            .attr('width', d => xScale(d))
            .attr('height', 50)
            .style('fill', 'green')

        select(this.node)
            .selectAll('text')
            .data(this.props.data)
            .enter()
            .append('text')
            .text((d) => d + ' k/d')
            .attr('x', (d, i) => xScale(d) + 5)
            .attr('y', (d, i) => i * 60 + 30)

        select(this.node)
            .append('g')
            .attr('transform', 'translate(0, ' + 200 + ')')
            .call(xAxis)
   }
    
   render() {
      return <svg ref={node => this.node = node} className='svg'
      width={550} height={250}>
      </svg>
   }
}


