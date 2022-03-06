import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (result, msg)=> {
    setAlert({
      result: result,
      msg: msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleTheme = ()=> {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('success', 'Changed to dark mode');
    }else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Changed to light mode');
    }
  }

  return (
    <>
    <Navbar title="Text Formatter" theme={theme} toggleTheme={toggleTheme} />
    <Alert alert={alert} />
    <div className="container my-4">
    <TextForm heading="Enter Your text Below: " theme={theme} showAlert={showAlert}  />
    </div>
    </>
  );
}

export default App;
