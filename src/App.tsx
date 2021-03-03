import { scaleLinear } from 'd3-scale';
import { select, Selection } from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const data = [
  {
    name: 'foo',
    number: 9000
  },
  {
    name: 'add',
    number: 4500
  },
  {
    name: 'gac',
    number: 3049
  },
  {
    name: 'okl',
    number: 6700
  },
  {
    name: 'yhg',
    number: 5689
  },
  {
    name: 'thg',
    number: 2800
  },
]

const App: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

  const y = scaleLinear()
              .domain([0,10000])
              .range([0,500])

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current))
    } else {
      // console.log("y(0)", y(0))
      // console.log("y(2500)", y(2500))
      // console.log("y(5000)", y(5000))

      selection
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', 100)
        .attr('x', (_, index) => index*110)
        .attr('fill', 'orange')
        .attr('height', d => y(d.number))
    }
  }, [selection, y])

  return (
    <div>
      {/* default width of the svg is 300 */}
      <svg ref={ref} width={800} height={500}>
      </svg>
    </div>
  )
}

export default App;
