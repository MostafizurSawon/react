import { useState } from 'react';
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ]

  return (
    <div className="App m-4">
      <center className='flex'>
        <Dropdown value={selection} onChange={handleSelect} options={options} />
        <Dropdown value={selection} onChange={handleSelect} options={options} />
        <Dropdown value={selection} onChange={handleSelect} options={options} />
        <Dropdown value={selection} onChange={handleSelect} options={options} />
      </center>
    </div>
  );
}

export default App;

/*
undefined || 100
=> 100


*/