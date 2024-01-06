import './app.css'
import { HomeContainer, LoginContainer, PageContainer, ProtectContainer } from './Containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//library.add(faEye, faEyeSlash)
import PublicLayout from './Layout/PublicLayout';
import ProtectLayout from './Layout/ProtectLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<LoginContainer/>}/>
            <Route path='/page' element={<PageContainer/>}/>
            <Route path='/register' element={<HomeContainer/>}/>
          </Route>
          <Route path='*' element={<h1>404</h1>}/>
          <Route element={<ProtectLayout/>}>
            <Route 
              path='/protect' 
              element={<ProtectContainer/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
