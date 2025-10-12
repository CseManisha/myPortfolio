// src/hooks/use-toast.js
import { toast } from 'react-hot-toast';

export default function useToast() {
  /**
   * Show a success toast
   * @param {string} message - The success message
   */
  const showSuccess = (message = 'Success!') => {
    toast.success(message, {
      icon: '✅',
    });
  };

  /**
   * Show an error toast
   * @param {string} message - The error message
   */
  const showError = (message = 'Something went wrong.') => {
    toast.error(message, {
      icon: '❌',
    });
  };

  /**
   * Show a loading toast
   * @param {string} message - The loading message
   * @returns {string} toastId - ID of the toast to update later
   */
  const showLoading = (message = 'Loading...') => {
    return toast.loading(message, {
      icon: '⏳',
    });
  };

  /**
   * Update a toast (usually loading → success or error)
   * @param {string} toastId - ID of the toast to update
   * @param {object} options - Options for the updated toast
   */
  const updateToast = (toastId, { message, type = 'success' }) => {
    toast.dismiss(toastId);
    if (type === 'success') {
      toast.success(message || 'Done!', { id: toastId });
    } else if (type === 'error') {
      toast.error(message || 'Failed!', { id: toastId });
    }
  };

  /**
   * Dismiss a specific toast or all
   * @param {string} [toastId] - Optional toast ID to dismiss
   */
  const dismiss = (toastId) => {
    toast.dismiss(toastId);
  };

  return {
    showSuccess,
    showError,
    showLoading,
    updateToast,
    dismiss,
  };
}
