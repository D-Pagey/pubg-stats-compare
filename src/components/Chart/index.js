import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import './index.css';

export default class Chart extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        size: PropTypes.array.isRequired
    }

    node = React.createRef()

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate() {
        this.createChart();
    }

    createChart = () => {
        const { data, size } = this.props;
        const node = this.node.current;
        const xScale = scaleLinear()
            .domain([0, max(data)])
            .range([0, size[0] - 50]);
        const xAxis = axisBottom(xScale);
        
        select(node)
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect');

        select(node)
            .selectAll('rect')
            .data(data)
            .exit()
            .remove();

        select(node)
            .selectAll('rect')
            .data(data)
            .attr('x', 0)    
            .attr('y', (d, i) => i * 60)
            .attr('width', xScale)
            .attr('height', 50)
            .style('fill', 'green');

        select(node)
            .selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .text((d) => `${d} k/d`)
            .attr('x', (d) => xScale(d) + 5)
            .attr('y', (d, i) => i * 60 + 30);

        select(node)
            .append('g')
            .attr('transform', `translate(0, ${200})`)
            .call(xAxis);
    }

    render() {
        return <svg ref={this.node} className='svg' width={550} height={250} />
    }
}


