import React, { useState } from 'react';
import './MedicineSearch.css';

// Medicine database with common Indian medicines
const MEDICINE_DATABASE = [
  { id: 1, name: 'Paracetamol 500mg', category: 'Pain Relief', manufacturer: 'Generic', price: 20 },
  { id: 2, name: 'Metformin 500mg', category: 'Diabetes', manufacturer: 'Generic', price: 45 },
  { id: 3, name: 'Amlodipine 5mg', category: 'Blood Pressure', manufacturer: 'Generic', price: 35 },
  { id: 4, name: 'Atorvastatin 10mg', category: 'Cholesterol', manufacturer: 'Generic', price: 55 },
  { id: 5, name: 'Aspirin 75mg', category: 'Blood Thinner', manufacturer: 'Generic', price: 15 },
  { id: 6, name: 'Omeprazole 20mg', category: 'Acidity', manufacturer: 'Generic', price: 30 },
  { id: 7, name: 'Levothyroxine 50mcg', category: 'Thyroid', manufacturer: 'Generic', price: 40 },
  { id: 8, name: 'Losartan 50mg', category: 'Blood Pressure', manufacturer: 'Generic', price: 50 },
  { id: 9, name: 'Glimepiride 2mg', category: 'Diabetes', manufacturer: 'Generic', price: 38 },
  { id: 10, name: 'Pantoprazole 40mg', category: 'Acidity', manufacturer: 'Generic', price: 42 },
  { id: 11, name: 'Clopidogrel 75mg', category: 'Blood Thinner', manufacturer: 'Generic', price: 65 },
  { id: 12, name: 'Rosuvastatin 10mg', category: 'Cholesterol', manufacturer: 'Generic', price: 70 },
  { id: 13, name: 'Telmisartan 40mg', category: 'Blood Pressure', manufacturer: 'Generic', price: 48 },
  { id: 14, name: 'Vitamin D3 60000 IU', category: 'Vitamin', manufacturer: 'Generic', price: 25 },
  { id: 15, name: 'Calcium Carbonate 500mg', category: 'Supplement', manufacturer: 'Generic', price: 22 },
];

const MedicineSearch = ({ onAddMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(MEDICINE_DATABASE.map(m => m.category))];

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = MEDICINE_DATABASE.filter(med => {
        const matchesSearch = med.name.toLowerCase().includes(term.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      setFilteredMedicines(filtered);
    } else {
      setFilteredMedicines([]);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (searchTerm.length > 0) {
      handleSearch(searchTerm);
    }
  };

  return (
    <div className="medicine-search">
      <div className="search-card">
        <h3 className="card-title">🔍 Search Medicines</h3>
        
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search for medicines..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <label>Filter by category:</label>
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="medicine-list">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map(medicine => (
              <div 
                key={medicine.id} 
                className="medicine-item"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('medicine', JSON.stringify(medicine));
                }}
              >
                <div className="medicine-info">
                  <div className="medicine-name">{medicine.name}</div>
                  <div className="medicine-meta">
                    <span className="medicine-category">{medicine.category}</span>
                    <span className="medicine-price">₹{medicine.price}</span>
                  </div>
                </div>
                <button 
                  className="add-btn"
                  onClick={() => onAddMedicine(medicine)}
                >
                  +
                </button>
              </div>
            ))
          ) : searchTerm.length > 0 ? (
            <div className="no-results">No medicines found</div>
          ) : (
            <div className="search-prompt">
              Start typing to search medicines from our database
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineSearch;