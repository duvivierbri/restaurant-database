import logo from './logo.svg';
import './App.css';

//importing components
import ReservationForm from './Components/ReservationForm';
import AllReservations from './Components/SeeAllReservations';

function App() {
  return (
    <div className="App">
      <ReservationForm/>
    </div>
  );
}

export default App;
