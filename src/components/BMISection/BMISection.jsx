import React, { useState } from 'react';
import './BMISection.css';

const BMISection = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const h = height / 100;
      const val = (weight / (h * h)).toFixed(1);
      setBmi(val);

      if (val < 18.5) {
        setMessage('Underweight');
      } else if (val >= 18.5 && val <= 24.9) {
        setMessage('Normal weight');
      } else if (val >= 25 && val <= 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      alert('Please enter valid height and weight');
    }
  };

  return (
    <section className="bmi-section section-padding" id="bmi">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="subtitle">BMI CALCULATOR</span>
            <h2 className="section-title text-start">CALCULATE YOUR <span>BMI</span></h2>
            <p className="description mb-5">
              The Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use our calculator to check your status.
            </p>
            
            <form className="bmi-form" onSubmit={calculateBMI}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input 
                    type="number" 
                    className="form-control glass-input" 
                    placeholder="Weight (kg)" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="number" 
                    className="form-control glass-input" 
                    placeholder="Height (cm)" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-premium w-100">Calculate Now</button>
                </div>
              </div>
            </form>

            {bmi && (
              <div className="bmi-result mt-4" data-aos="zoom-in">
                <div className="result-card glass-card">
                  <div className="result-item">
                    <h5>Your BMI</h5>
                    <span className="bmi-val">{bmi}</span>
                  </div>
                  <div className="result-item">
                    <h5>Category</h5>
                    <span className={`bmi-status ${message.toLowerCase().replace(' ', '-')}`}>{message}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
            <div className="bmi-table glass-card">
              <h3>BMI CHART</h3>
              <table className="table table-dark table-borderless">
                <thead>
                  <tr>
                    <th>BMI Range</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td>18.5 - 24.9</td>
                    <td>Normal</td>
                  </tr>
                  <tr>
                    <td>25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td>30.0 and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMISection;
