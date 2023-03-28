import './App.css';
import Sidebar from './components/Sidebar';
import Sidebar1 from './components/Sidebar1';
import Form from './components/form';
import './form.css';
import Profile from './components/Profile';
import './Profile.css';
function App() {
  return (
    <>
      <div className="App">
        <Sidebar1/>
     <Sidebar/>
     <Form/>
     <Profile/>
      </div>
    </>
  );
}

export default App;
