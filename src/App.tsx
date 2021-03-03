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

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current))
    }
  }, [selection])

  return (
    <div>
      {/* default width of the svg is 300 */}
      <svg width={800} height={500}>
      </svg>
    </div>
  )
}

export default App;
