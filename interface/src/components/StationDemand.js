import React, { useState } from 'react';
import './StationDemand.css';

function StationDemand() {
  const [station, setStation] = useState('');
  const [time, setTime] = useState('');
  const [estimatedX, setEstimatedX] = useState('x');
  const [estimatedY, setEstimatedY] = useState('y');

  const handleSearch = () => {
    // Simulate fetching data for the given station
    setEstimatedX(Math.floor(Math.random() * 20) + 1);
    setEstimatedY(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="station-demand">
      <header>
        <img src="https://bluebikes.com/themes/custom/bluebikes/images/logos/logo-bluebikes.png" alt="Blue Bikes Logo" />
        <h1>Pedal Pulse</h1>
      </header>
      <div className="search-container">
        <h2>Find Station Demand</h2>
        <input
          type="text"
          placeholder="Enter your Station"
          value={station}
          onChange={(e) => setStation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        <p>
          The estimated number of bikes available at your station in the next hour: <span>{estimatedX}</span>
        </p>
        <div>
          <label>Select time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <p>
          The estimated number of bikes available at your station for the specified time: <span>{estimatedY}</span>
        </p>
      </div>
    </div>
  );
}

export default StationDemand;
