// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import NewList from './components/NewList';
import MyLists from './components/MyLists';
import SimpleExample from './components/SimpleExample';
import { V2Example } from './components/V2Example';



function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <NewList/>
      <MyLists/>
      <div>
      <SimpleExample/>
      <V2Example/>
      </div>
    </div>
  );
}

export default App;
