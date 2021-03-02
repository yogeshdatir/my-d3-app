import { select } from 'd3-selection';
import React, { useEffect, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null >(null)

  useEffect(() => {
    // console.log(select(svgRef.current))
    select(svgRef.current)
      .append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('fill', 'blue')
  })

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  )
}

export default App;
