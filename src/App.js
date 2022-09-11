import React from 'react'
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import LandingPage from './components/home/LandingPage';
import LandingPageFunctional from './components/home/LandingPageFunctional';
import Movie from './components/home/Movie'; //this uses class component
import MovieFunctional from './components/home/MovieFunctional'; //this uses functional component
import store from './store';




const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <React.Fragment>
            {/* this uses class-based component, the other uses functional. You can comment out one and use the other */}
            {/* <Route path='/' element={<LandingPage />} /> */}
            <Route path='/' element={<LandingPageFunctional />} />
            
            {/* this uses class-based component, the other uses functional. You can comment out one and use the other */}
            {/* <Route exact path='movie/:id' element={<Movie />} /> */} 
            <Route path='/movie/:id' element={<MovieFunctional />} />

          </React.Fragment>
        </Routes>
        <Footer />
      </Provider>
    </div>
  )
}

export default App