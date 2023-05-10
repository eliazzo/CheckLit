// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import NewList from './components/NewList';
import MyLists from './components/MyLists';



function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <NewList/>
      <MyLists/>
    </div>
  );
}

export default App;
