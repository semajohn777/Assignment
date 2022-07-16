import logo from './logo.svg';
import Illustration from './image/illustration-hero (1).svg';
import './App.css';
import Change from './Change';
import Playment from './Playment';

function App() {
  return (
    <div className="App">


      <section>
        <img src={Illustration} alt="" 
        className='illustration'/>
        <div className='titlediv'>
            <h1 className='title'>Order Summary</h1>
            <p className='titleText'>You can listen to millons of songs,
            audiobook and podcast on any device  
            anywhere you like!.</p>
            
          </div>
         <Change/>
        <Playment/>
       <h4 className='lastText'>Cancel Order</h4>
        </section>
        
    </div>
  );
}

export default App;
