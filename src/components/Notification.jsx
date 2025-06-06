import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

function Notification({ message, type = 'success' }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className={`rounded-lg shadow-lg p-4 flex items-center ${
        type === 'success' ? 'bg-green-50 border-l-4 border-green-500' : 
        type === 'error' ? 'bg-red-50 border-l-4 border-red-500' : 
        'bg-yellow-50 border-l-4 border-yellow-500'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="text-green-500 mr-3\" size={20} />
        ) : type === 'error' ? (
          <AlertTriangle className="text-red-500 mr-3" size={20} />
        ) : (
          <AlertTriangle className="text-yellow-500 mr-3" size={20} />
        )}
        
        <p className={`text-sm ${
          type === 'success' ? 'text-green-700' : 
          type === 'error' ? 'text-red-700' : 
          'text-yellow-700'
        }`}>
          {message}
        </p>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default Notification;