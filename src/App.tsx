import { useState } from 'react'
import { MyButton } from './components/common'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyButton>
        test
      </MyButton>
    </>
  )
}

export default App;
