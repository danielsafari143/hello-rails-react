import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import { BrowserRouter , Route , Router , Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>El</div>}>
          <Route path='daniel' element={<div>Daniel</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
