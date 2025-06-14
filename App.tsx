
import React, { useState, useCallback, useEffect } from 'react';
import { HealthData, RiskPrediction } from './types';
import { APP_TITLE, INITIAL_HEALTH_DATA } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import RiskInputForm from './components/RiskInputForm';
import RiskResultDisplay from './components/RiskResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import DisclaimerModal from './components/DisclaimerModal';
import { getRiskFromPythonModel } from './services/pythonPredictionService';

const App: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [prediction, setPrediction] = useState<RiskPrediction | null>(null);
  const [isLoadingRisk, setIsLoadingRisk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true);

  const handleFormSubmit = useCallback(async (data: HealthData) => {
    setIsLoadingRisk(true);
    setError(null);
    setPrediction(null);
    setHealthData(data);

    try {
      // Call the service that represents the Python model backend
      const riskPredictionResult = await getRiskFromPythonModel(data);
      setPrediction(riskPredictionResult);
      setIsLoadingRisk(false);

    } catch (e) {
      console.error("Error during risk assessment:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(`Failed to process request: ${errorMessage}. Ensure your Python backend (if connected) is operational, or check the simulated service.`);
      setIsLoadingRisk(false);
    }
  }, []);

  const handleReset = () => {
    setHealthData(null);
    setPrediction(null);
    setError(null);
    setIsLoadingRisk(false);
  };
  
  useEffect(() => {
    const disclaimerShown = localStorage.getItem('disclaimerShown');
    if (disclaimerShown) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
    localStorage.setItem('disclaimerShown', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-100">
      {showDisclaimer && <DisclaimerModal onAccept={handleDisclaimerAccept} />}
      <Header title={APP_TITLE} />
      
      <main className="w-full max-w-4xl mx-auto flex-grow flex flex-col items-center">
        {!prediction && !isLoadingRisk && (
          <RiskInputForm onSubmit={handleFormSubmit} initialData={INITIAL_HEALTH_DATA} />
        )}

        {isLoadingRisk && (
          <div className="flex flex-col items-center justify-center p-10 bg-slate-700 bg-opacity-50 rounded-lg shadow-xl">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-slate-300">
              Accessing for health factors...
            </p>
          </div>
        )}

        {error && (
          <div className="my-6 p-4 bg-red-700 bg-opacity-80 text-white rounded-lg shadow-lg w-full max-w-md text-center">
            <h3 className="font-bold text-lg mb-2">Error</h3>
            <p>{error}</p>
          </div>
        )}

        {prediction && !isLoadingRisk && (
          <RiskResultDisplay 
            prediction={prediction} 
            onReset={handleReset} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
