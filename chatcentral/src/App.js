import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path = '/' component={Homepage}/>
      <Route path = '/chat' component={ChatPage}/>
    </div>
  );
}

export default App;
