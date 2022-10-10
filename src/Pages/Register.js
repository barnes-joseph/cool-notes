import FormHeader from "../Components/FormHeader";
import Input from "../Components/Input";
import Logo from '../Components/Logo'
import { FormContainer,Form,SubmitDiv,Submit, InputDiv } from "../Components/Styled";
import {useState,useContext} from 'react'
import { RegisterAccount,SignIn } from "../API/account-api";
import {Auth} from "../Components/Auth"
import {Navigate,Link} from 'react-router-dom'

const Register = () => {
  const [details,setDetails] = useState({'email':'','password':'','name':'','account_type':'normal','confirm password':''})
  const {signIn} = useContext(Auth)
  const [registered,setRegistered] = useState(false)
  const [loading,setLoading] = useState(false)

  const onChange = (e) =>{
    const {name,value} = e.target
    setDetails(prevDetails=>{
      return {...prevDetails,[name]:value}
    })
  }

    const Login = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    SignIn(headers, details, signIn);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    if(details.password === details["confirm password"]){
      RegisterAccount(headers,details)
      Login()
      setRegistered(true)
      setLoading(false)
    }
    else{
      alert('Passwords do not match')
    }
  }

    return (
      !registered ?
      <FormContainer>
        <Logo />
        <Form onSubmit={onSubmit} page='register'>
          <FormHeader header="Sign Up" />
          <InputDiv>
            <Input
              name="name"
              type="text"
              onChange={onChange}
              label='Name'
            />
            <Input
              name="email"
              type="email"
              label='Email'
              onChange={onChange}
            />
            <Input
              name="password"
              type="password"
              label='Password'
              onChange={onChange}
            />
            <Input
              name="confirm password"
              type="password"
              label='Confirm Password'
              onChange={onChange}
            />
          </InputDiv>
          <SubmitDiv>
            <Link to='/login' style={{color:'white',textDecoration:'none'}}>
            <span>Already have an account?</span>
            </Link>
            <Submit type="submit" value={loading ? 'Submitting ...' : 'Submit'} />
          </SubmitDiv>
        </Form>
      </FormContainer> :
      <Navigate to='/notes'/>
    );
}
export default Register;