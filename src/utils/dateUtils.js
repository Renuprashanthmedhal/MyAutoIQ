// utils/dateUtils.js
export const parseDate = (dateString) => {
    if (!dateString || dateString === '-') return new Date(0); // Default for empty dates
    
    try {
      const datePart = dateString.split(' ').slice(0, 3).join(' ');
      return new Date(datePart);
    } catch (error) {
      console.error('Error parsing date:', dateString);
      return new Date(0);
    }
  };