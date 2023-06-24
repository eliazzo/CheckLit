// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import ViewForm from './components/ViewForm';
import ListCard from './components/ListCard';



function App() {
  return (
    <div className="App">
      <AppHeader>Checklit</AppHeader>
      <ViewForm/>
      <ListCard/>
      
    </div>
  );
}

export default App;
