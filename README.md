# 🏥 AI Healthcare Assistant

**SoumyaAI-powered Guide for Preliminary Health Insights**

This project is an AI-powered healthcare assistant web app designed to provide users with **preliminary health risk assessments** based on symptoms, health history, and lifestyle data.

---

## 🧠 Features

- ✅ Intuitive form to enter personal health data
- ✅ Symptom checker with common and critical symptoms
- ✅ Pre-existing condition selector for personalized insights
- ✅ Activity level, smoking habits, and gender-based logic
- ✅ AI backend to analyze inputs and assess health risks
- ✅ Clean, dark-themed UI with responsive design

---

## 🚀 Tech Stack

| Layer          | Technology                            |
|----------------|----------------------------------------|
| 💻 Frontend     | React.js, Tailwind CSS                |
| ⚙ Backend       | Node.js / Python (FastAPI or Flask) [Choose one] |
| 🤖 AI/ML Logic  | OpenAI API / Scikit-learn / Custom models |
| 🗃️ Database      | Firebase / MongoDB / PostgreSQL        |
| ☁ Hosting       | Vercel / Render / Heroku / GCP         |

---

## 📋 How It Works

1. User enters **basic health info** (age, gender, smoking status, activity level).
2. User selects from a list of **symptoms** and **pre-existing conditions**.
3. Optional text fields allow for additional health data.
4. On clicking **“Assess My Risk”**, the backend processes this information.
5. The AI returns a **health risk analysis** with possible conditions or guidance.

---

## 🖼 UI Snapshot

> ![AI Healthcare Assistant Screenshot](/.assets/Screenshot 2025-06-14 110409.png)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/ai-healthcare-assistant.git
cd ai-healthcare-assistant
npm install   # or pip install -r requirements.txt for Python backend
npm run dev   # or uvicorn main:app --reload


4. Open your browser to [http://localhost:5173/](http://localhost:5173/)