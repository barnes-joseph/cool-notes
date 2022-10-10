import FormHeader from "../Components/FormHeader";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import {
  Form,
  FormContainer,
  SubmitDiv,
  Submit,
  InputDiv,
} from "../Components/Styled";
import { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { SignIn } from "../API/account-api";
import { Auth } from "../Components/Auth";
import {Navigate} from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const { signIn,isAuthenticated } = useContext(Auth);
  const [loggedIn,setLoggedIn] = useState(isAuthenticated())
  const [loading,setLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    SignIn(headers, data, signIn,setLoading,setLoggedIn,isAuthenticated);
  };


  return (
    !loggedIn ?
    <FormContainer>
      <Logo />
      <Form onSubmit={onSubmit} page='login'>
        <FormHeader header="Sign In" />
        <InputDiv>
          <Input name="email" type="email" onChange={onChange} label='Email' required/>
          <Input name="password" type="password" label='Password' onChange={onChange} required/>
        </InputDiv>
        <SubmitDiv>
          <Link to='/register' style={{color:'white',textDecoration:'none'}}>
            <span>Don't have an account?</span>
          </Link>
          <Submit type="submit" value={loading ? 'Submitting ...' : 'Submit'} />
        </SubmitDiv>
      </Form>
    </FormContainer> :
    <Navigate to='/notes'/>
  );
};
export default Login;
