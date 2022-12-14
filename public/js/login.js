// const login = async (email, password) => {
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: 'http://127.0.0.1:8000/api/v1/users/login',
//       data: {
//         email,
//         password,
//       },
//     });
//     if (res.data.status === 'success') {
//       alert('Logged in successfully');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1000);
//     }
//     console.log(res);
//   } catch (err) {
//     console.log(err.response.data.message);
//   }
// };

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   login(email, password);
// });
import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v1/users/logout',
    });
    if (res.data.status === 'success')
      showAlert('success', 'Logged out successfully');
    window.setTimeout(() => {
      location.assign('/');
    }, 200);
    //  location.reload(true);
    console.log(res);
  } catch (err) {
    showAlert('error', 'Logging out failed!');
  }
};
