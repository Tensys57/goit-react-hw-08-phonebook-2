import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(value) {
    privateApi.defaults.headers.Authorization = value;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};

export const createNewUser = body => {
  return publicApi.post('/users/signup', body);
};

export const loginUser = body => {
  return publicApi.post('/users/login', body);
};

export const getProfileService = async () => {
  const { data } = await privateApi.get('/users/profile');
  return data;
};

export const updateUser = async body => {
  const { data } = await privateApi.put('/users/profile', body);
  return data;
};
// export const currentUser = body => {
//   return publicApi.post('/users/current', body);
// };

// export const addContactApi = async contact => {
//   return await axios.post('/contacts', contact).then(res => {
//     const { data } = res;
//     // token.set(data.token);
//     return data;
//   });
// };

// export const getContactApi = async () => {
//   return await axios.get('contacts').then(res => {
//     const { data } = res;
//     return data;
//   });
// };

// export const removeContactApi = async id => {
//   return await axios.delete(`contacts/${id}`).then(res => res.data);
// };
