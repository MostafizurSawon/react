import { createContext, useState, useEffect } from 'react';
import Dropdown from './../components/Dropdown';
import Button from './../components/Button';
 
const NavigationContext = createContext();

function NavigationProvider({children}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }

  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
    <div>
      {/* <Button className="warning bg-red-500" onClick={()=> navigate('/accordion')}>Go to Accordion</Button>
      <Button className="primary" onClick={()=> navigate('/dropdown')}>Go to Dropdown</Button> */}
    </div>
    {currentPath}
      {children}
    </NavigationContext.Provider>
  )
}


export { NavigationProvider } 
export default NavigationContext;