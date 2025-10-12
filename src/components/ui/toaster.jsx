// src/components/Toaster.jsx
import React from 'react';
import { Toaster } from 'react-hot-toast';

const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          icon: '✅',
        },
        error: {
          icon: '❌',
        },
      }}
    />
  );
};

export default AppToaster;
