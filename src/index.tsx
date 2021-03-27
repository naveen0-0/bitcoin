import * as React from 'react'
import * as ReactDom from 'react-dom';
import { FC } from 'react'

const App: FC = () => {
   return (
      <div>
         Hello World
      </div>
   )
}

ReactDom.render(<App />, document.getElementById('root'))