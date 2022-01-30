import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/chat" exact>
            <ChatPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
