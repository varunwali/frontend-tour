const logout = async () => {
    const res = await axios({
      method: 'GET',
      url: 'https://login-api-b6fw.onrender.com/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  };
   
  document.querySelector('.nav__el--logout').addEventListener('click', logout);