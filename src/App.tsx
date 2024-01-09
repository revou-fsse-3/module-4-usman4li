
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './Layout/PublicLayout';
import { HomeContainer, ListContainer, LogContainer, PrivateContainer, RegisterContainer } from './Containers';
import PrivateLayout from './Layout/PrivateLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route path='/' element={<HomeContainer/>}/>
            {/* <Route path='/register' element={<RegisContainer onRegister={function (_data: RegistrationFormData): void {
              throw new Error('Function not implemented.');
            } }/>} /> */}
            <Route path='/register' element={<RegisterContainer/>} />
            <Route path='/login' element={<LogContainer/>} />
            <Route path='/list' element={<ListContainer/>} />
          </Route>
          <Route element={<PrivateLayout/>}>
            <Route path='/protect' element={<PrivateContainer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
