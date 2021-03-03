import { select, Selection } from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const data = [
  {
    height: 90,
    width: 100,
    color: 'purple'    
  },
  {
    height: 70,
    width: 100,
    color: 'red'
  }, 
  {
    height: 50,
    width: 100,
    color: 'yellow'
  }
]

const App: React.FC = () => {
  const ref = useRef(null)
  const [selection, setSelection] = useState<null | Selection<null, unknown, null, undefined>>(null)

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current))
    } else {
      selection
        .selectAll('rect')
        .data(data)
        .attr('width',d => d.width)
        .attr('height', d => d.height)
        .attr('fill', d => d.color)
        .attr('x', (_, index) => index * 160)
    }
  }, [selection])

  return (
    <div>
      {/* default width of the svg is 300 */}
      <svg ref={ref} width='600'>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  )
}

export default App;
