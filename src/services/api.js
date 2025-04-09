// services/api.js
import axios from 'axios';

const api = {
  getEmails: () => axios.get('https://67f69f9642d6c71cca62c47a.mockapi.io/api/v1/getMailHistory/emails')
};

export default api;