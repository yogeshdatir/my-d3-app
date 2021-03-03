import { select, Selection } from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const data = [{width: 200, height: 100, color:'red'}]

const App: React.FC = () => {
  const ref = useRef(null)
  const [selection, setSelection] = useState<null | Selection<null, unknown, null, undefined>>(null)

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current))
    } else {
      selection.data(data)
    }
    console.log(selection)
  }, [selection])

  return (
    <div>
      <svg ref={ref}>
      </svg>
    </div>
  )
}

export default App;
