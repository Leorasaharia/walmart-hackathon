
# 🧠 Hyperlocal Agentic AI Inventory Rebalancer

A cutting-edge AI-powered solution for **Walmart's Omnichannel Inventory Optimization** challenge, built using agentic AI frameworks and hyperlocal data insights. This platform enables real-time autonomous decision-making to forecast demand and rebalance inventory across stores and fulfillment centers with zero human intervention.

---

## 🎯 Problem Statement

**Omnichannel Inventory Optimization**  
Managing inventory across multiple channels (in-store, online, delivery, etc.) is a complex but essential task for Walmart. Our solution leverages AI agents to dynamically respond to hyperlocal demand spikes (due to local events, weather changes, viral trends, etc.), minimizing out-of-stock scenarios and maximizing fulfillment efficiency.

---

## 💡 Key Features

### 🧠 Multi-Agent Intelligence
- Specialized autonomous agents (Demand Forecaster, Transfer Optimizer, Logistics Coordinator).
- Collaborative decision-making and self-initiated inventory transfers.
- Minimal human intervention, fully AI-orchestrated backend.

### 📍 Hyperlocal Demand Forecasting
- Real-time signals from:
  - POS Systems
  - Weather APIs
  - Local Event Feeds
  - Social Media Trends
- Detects anomalies and predicts demand at micro-geographic levels.

### 🔍 Explainable AI
- Transparent rationale behind every action.
- Visual justifications and prediction scores.
- AI decisions you can trust and audit.

### 📊 Streamlit Dashboard (Live Simulation)
- Real-time interface showing:
  - Demand forecasting
  - Transfer orchestration
  - Inventory level simulation
- Embedded live demo:  
  👉 [Launch Demo](https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/)

### 🌱 Sustainability & Logistics Efficiency
- Optimized routing and minimal wastage.
- Maximized product availability across stores.
- Reduced CO₂ footprint through smarter logistics.

---

## 🚀 Quick Start

### Backend (Python - Streamlit)

```bash
# Create environment (Python 3.10)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Run Streamlit app
streamlit run streamlit_app.py
````

### Frontend (React + TypeScript)

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` to explore the frontend.

---


## 📈 AI Pipeline

**Model:**

* LSTM-based Time Series Predictor
* Scikit-learn pre-processing with MinMaxScaler
* TensorFlow Keras model trained on historical Walmart data
* Evaluation using MAE and RMSE

**Inputs:**

* Store ID, Department, Week, IsHoliday
* Temperature, Fuel Price, CPI, Unemployment, Promotions

**Outputs:**

* Predicted Weekly Sales
* Inventory Redistribution Strategy

---

## 🔐 Streamlit Deployment Tips

Ensure your `.streamlit/config.toml` includes:

```toml
[general]
pythonVersion = "3.10"
```

---

## 🎨 UI Design Highlights

* **Color Theme:** Walmart-aligned blue, yellow, and white.
* **Animations:** Smooth transitions and micro-interactions using Framer Motion.
* **Responsiveness:** Tailwind-powered layout adaptable to mobile, tablet, desktop.
* **Charts:** Recharts for time-series demand visuals and agent action flows.

---

## 📊 Sample Workflow

1. Open the live demo.
2. View a local event spike in Store 45.
3. Demand agent forecasts sales surge in the “Beverages” category.
4. Logistics agent rebalances inventory from Store 12 to Store 45.
5. Streamlit dashboard updates and visualizes the process in real time.

---

## 🔧 Tech Stack

**Backend:**

* Python 3.10
* Streamlit
* TensorFlow, scikit-learn, pandas, matplotlib

**Frontend:**

* React 18 + TypeScript
* Tailwind CSS
* Recharts & Lucide Icons
* Vite or Next.js

---

## 📢 Call to Action

> “AI Agents. Hyperlocal Impact. Walmart Ready.”

Bring the future of autonomous inventory optimization to life—today.

---

## 📝 License

This project is for educational and hackathon demonstration purposes only.
© 2025 Walmart AI Hackathon Team - AgenticX

```



# walmart-hackathon