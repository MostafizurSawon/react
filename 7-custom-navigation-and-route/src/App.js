import './App.css';
import Button from './Button';
import { GoBell, GoDatabase } from 'react-icons/go';


function App() {
  const handleClick = () =>{
    console.log('clicked!')
  }

  return (
    <div className="App py-3">
      <center>
      <div className="mb-3">
        <Button className="mb-8" primary rounded outline onClick={handleClick}> Buy Me </Button>
      </div>
      <div className="mb-3">
        <Button secondary onMouseEnter={handleClick}>  Click Me </Button>
      </div>
      <div className="mb-3">
        <Button success rounded outline onMouseLeave={handleClick}><GoBell /> Register </Button>
      </div>
      <div className="mb-3">
        <Button warning > Logout </Button>
      </div>
      <div className="mb-3">
        <Button> <GoDatabase /> Logout </Button>
      </div>
      <div className="mb-3">
        <Button danger rounded outline> Delete </Button>
      </div>
      </center>
      
    </div>
  );
}

export default App;
