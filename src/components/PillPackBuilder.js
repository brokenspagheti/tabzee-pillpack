import React, { useState } from 'react';
import './PillPackBuilder.css';

const PillPackBuilder = ({ medicines, onRemoveMedicine, onUpdateMedicine }) => {
  const [draggedOver, setDraggedOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDraggedOver(true);
  };

  const handleDragLeave = () => {
    setDraggedOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDraggedOver(false);
  };

  const calculateTotal = () => {
    return medicines.reduce((sum, med) => sum + (med.price * med.quantity), 0);
  };

  const getServiceFee = () => {
    if (medicines.length <= 3) return 300;
    if (medicines.length <= 6) return 500;
    return 800;
  };

  const timingOptions = ['morning', 'afternoon', 'evening', 'night'];

  return (
    <div className="pill-pack-builder">
      <div className="builder-card">
        <h3 className="card-title">📦 Your Pill Pack</h3>
        
        <div 
          className={`drop-zone ${draggedOver ? 'drag-over' : ''} ${medicines.length === 0 ? 'empty' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {medicines.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <p>Drag medicines here or click + to add</p>
            </div>
          ) : (
            <div className="medicine-pack-list">
              {medicines.map(medicine => (
                <div key={medicine.id} className="pack-item">
                  <div className="pack-item-header">
                    <span className="pack-medicine-name">{medicine.name}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveMedicine(medicine.id)}
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="pack-item-controls">
                    <div className="control-group">
                      <label>Quantity:</label>
                      <input 
                        type="number" 
                        min="1" 
                        max="10"
                        value={medicine.quantity}
                        onChange={(e) => onUpdateMedicine(medicine.id, { quantity: parseInt(e.target.value) })}
                        className="quantity-input"
                      />
                    </div>
                    
                    <div className="control-group">
                      <label>Timing:</label>
                      <select 
                        value={medicine.timing}
                        onChange={(e) => onUpdateMedicine(medicine.id, { timing: e.target.value })}
                        className="timing-select"
                      >
                        {timingOptions.map(time => (
                          <option key={time} value={time}>
                            {time.charAt(0).toUpperCase() + time.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="pack-item-price">
                    ₹{medicine.price * medicine.quantity}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {medicines.length > 0 && (
          <div className="pack-summary">
            <div className="summary-row">
              <span>Total Medicines:</span>
              <span className="summary-value">{medicines.length}</span>
            </div>
            <div className="summary-row">
              <span>Total Pills:</span>
              <span className="summary-value">
                {medicines.reduce((sum, m) => sum + m.quantity, 0)}
              </span>
            </div>
            <div className="summary-row total">
              <span>Monthly Cost:</span>
              <span className="summary-value">₹{calculateTotal()}</span>
            </div>
            <div className="summary-row service">
              <span>Service Fee:</span>
              <span className="summary-value">₹{getServiceFee()}</span>
            </div>
            <div className="summary-row grand-total">
              <span>Grand Total:</span>
              <span className="summary-value">
                ₹{calculateTotal() + getServiceFee()}
              </span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PillPackBuilder;