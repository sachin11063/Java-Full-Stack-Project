import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [electricity, setElectricity] = useState(0);
  const [carTravel, setCarTravel] = useState(0);
  const [flights, setFlights] = useState(0);
  const [publicTransport, setPublicTransport] = useState(0);
  const [meatConsumption, setMeatConsumption] = useState(0);
  const [wasteGenerated, setWasteGenerated] = useState(0);
  const [waterUsage, setWaterUsage] = useState(0);
  const [shoppingHabits, setShoppingHabits] = useState(0);
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = () => {
    const electricityEmission = electricity * 0.92; // kg CO2 per kWh
    const carEmission = carTravel * 0.21; // kg CO2 per km
    const flightEmission = flights * 90; // kg CO2 per short flight
    const publicTransportEmission = publicTransport * 0.05; // kg CO2 per km
    const meatEmission = meatConsumption * 7.2; // kg CO2 per meal (avg)
    const wasteEmission = wasteGenerated * 2.5; // kg CO2 per kg of waste
    const waterEmission = waterUsage * 0.0015; // kg CO2 per liter
    const shoppingEmission = shoppingHabits * 10; // kg CO2 per item (avg)

    const total =
      electricityEmission +
      carEmission +
      flightEmission +
      publicTransportEmission +
      meatEmission +
      wasteEmission +
      waterEmission +
      shoppingEmission;

    setFootprint(total.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Carbon Footprint Calculator</h2>

      <div className="input-group">
        <label>Electricity Usage (kWh/month):</label>
        <input type="number" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Car Travel (km/month):</label>
        <input type="number" value={carTravel} onChange={(e) => setCarTravel(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Public Transport Usage (km/month):</label>
        <input type="number" value={publicTransport} onChange={(e) => setPublicTransport(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Flights Taken (per month):</label>
        <input type="number" value={flights} onChange={(e) => setFlights(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Meat-based Meals (per month):</label>
        <input type="number" value={meatConsumption} onChange={(e) => setMeatConsumption(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Waste Generated (kg/month):</label>
        <input type="number" value={wasteGenerated} onChange={(e) => setWasteGenerated(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Water Usage (liters/month):</label>
        <input type="number" value={waterUsage} onChange={(e) => setWaterUsage(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Items Shopped (clothing/electronics per month):</label>
        <input type="number" value={shoppingHabits} onChange={(e) => setShoppingHabits(e.target.value)} />
      </div>

      <button onClick={calculateFootprint}>Calculate</button>

      {footprint !== null && (
        <div className="result">
          <h3>Your Estimated Monthly Carbon Footprint:</h3>
          <p><strong>{footprint} kg CO₂</strong></p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
