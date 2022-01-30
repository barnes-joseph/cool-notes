
const url = process.env.REACT_APP_API_URL;

export const RegisterAccount = async (headers, data) => {
  const register = await fetch(`${url}/account/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const register_json = await register.json();
  if (register.status === 200) {
    console.log(register_json);
    alert(register_json.message);
  } else if (register.status === 400) {
    alert(register_json.message);
  } else if (register.status === 422) {
    alert(register_json.message);
  } else {
    alert("Could not register account");
  }
  return register.status
  
};

export const SignIn = async (headers, data, signIn,setLoading,setLoggedIn,isAuthenticated) => {
  const login = await fetch(`${url}/account/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const login_json = await login.json();
  if (login.status === 200) {
    signIn(login_json.token, login_json.account);
    setLoading(false)
    setLoggedIn(isAuthenticated())
  } else if (login.status === 400) {
    alert(login_json.message);
  } else if (login.status === 422) {
    alert(login_json.message);
  } else {
    alert("Could not Sign In");
  }
  return login.status
};
