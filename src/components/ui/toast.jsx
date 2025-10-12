// src/components/Toast.jsx
import React from 'react';
import { toast } from 'react-hot-toast';

const Toast = () => {
  const handleSuccess = () => {
    toast.success('✅ Action completed successfully!');
  };

  const handleError = () => {
    toast.error('❌ Something went wrong.');
  };

  const handleLoading = () => {
    const toastId = toast.loading('⏳ Processing...');
    // You can dismiss or replace it after a timeout
    setTimeout(() => {
      toast.success('✅ Done!', { id: toastId });
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleLoading}>Show Loading</button>
    </div>
  );
};

export default Toast;
