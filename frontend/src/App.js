import './App.css';
import SideBar from './Components/SideBar/SideBar';
//COMPONENTS
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className="App">
    
      <AppRouter/>
     <SideBar/>
    </div>
  );
}

export default App;
