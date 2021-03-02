import { select, selectAll } from 'd3-selection';
import React, { useEffect, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null >(null)

  useEffect(() => {
    // console.log(select(svgRef.current))
    // select(svgRef.current)
    //   .append('rect')
    //   .attr('width', 100)
    //   .attr('height', 100)
    //   .attr('fill', 'blue')

    selectAll('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('fill', 'blue')
      // here first argument is element, we don't need it here so we can skip it by adding _.
      .attr('x', (_ , index) => index*100 )
  })

  return (
    <div>
      <svg ref={svgRef}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  )
}

export default App;
