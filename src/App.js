import './App.css';
import LineChart from './Components/Charts/LineChart';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <div className="chart">
      <h1>CrossTower Chart</h1>
				<LineChart />
			</div>
    </div>
  );
}

export default App;
