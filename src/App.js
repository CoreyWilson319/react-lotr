import './App.css';
import Movie from './Movie'

function App(props) {
  return (
    <div className="App">
      <Movie 
      title={props.fellowship.title}
      hours={props.fellowship.hours}
      minutes={props.fellowship.minutes}
      />
      <Movie 
      title={props.twoTowers.title}
      hours={props.twoTowers.hours}
      minutes={props.twoTowers.minutes}
      />
      <Movie 
      title={props.returnOfTheKing.title}
      hours={props.returnOfTheKing.hours}
      minutes={props.returnOfTheKing.minutes}
      />
    </div>
  );
}

export default App;
