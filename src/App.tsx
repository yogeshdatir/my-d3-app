import { scaleLinear, scaleBand } from 'd3-scale';
import { select, Selection } from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { max } from 'd3-array'

const data = [
  {
    name: 'foo',
    number: 8000
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
  {
    name: 'edf',
    number: 600
  },
  {
    name: 'ofh',
    number: 6800
  }
]

const App: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

  const maxValue = max(data, d => d.number)

  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, 500])

  const x = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, 1000])
    .paddingInner(0.05)
    .paddingOuter(0.2)

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
        .attr('width', x.bandwidth)
        .attr('x', d => {
          const xValue = x(d.name)
          if (xValue) {
            return xValue
          }
          return null
        })
        // .attr('x', d => x(d.name)!)
        .attr('fill', 'orange')
        .attr('height', d => y(d.number))
    }
  }, [selection, x, y])

  return (
    <div>
      {/* default width of the svg is 300 */}
      <svg ref={ref} width={1000} height={500}>
      </svg>
    </div>
  )
}

export default App;
