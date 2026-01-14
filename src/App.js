import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MedicineSearch from './components/MedicineSearch';
import PillPackBuilder from './components/PillPackBuilder';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [showBuilder, setShowBuilder] = useState(false);

  const handleAddMedicine = (medicine) => {
    if (!selectedMedicines.find(m => m.id === medicine.id)) {
      setSelectedMedicines([...selectedMedicines, { ...medicine, quantity: 1, timing: 'morning' }]);
    }
  };

  const handleRemoveMedicine = (medicineId) => {
    setSelectedMedicines(selectedMedicines.filter(m => m.id !== medicineId));
  };

  const handleUpdateMedicine = (medicineId, updates) => {
    setSelectedMedicines(selectedMedicines.map(m => 
      m.id === medicineId ? { ...m, ...updates } : m
    ));
  };

  return (
    <div className="App">
      <Header />
      <Hero onGetStarted={() => setShowBuilder(true)} />
      
      {showBuilder && (
        <div className="builder-section">
          <div className="container">
            <h2 className="section-title">Build Your Pill Pack</h2>
            <div className="builder-grid">
              <MedicineSearch onAddMedicine={handleAddMedicine} />
              <PillPackBuilder 
                medicines={selectedMedicines}
                onRemoveMedicine={handleRemoveMedicine}
                onUpdateMedicine={handleUpdateMedicine}
              />
            </div>
          </div>
        </div>
      )}
      
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;