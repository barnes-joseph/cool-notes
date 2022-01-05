import FormHeader from "../Components/FormHeader";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import {Form,FormContainer,SubmitDiv,Submit,InputDiv} from "../Components/Styled"

const Login = () => {
    return (
      <FormContainer>
        <Logo />
        <Form>
          <FormHeader header="Login" />
          <InputDiv>
            <Input name="email" type="email" />
            <Input name="password" type="password" />
          </InputDiv>
          <SubmitDiv>
            <span>Don't have an account?</span>
            <Submit type="submit">submit</Submit>
          </SubmitDiv>
        </Form>
      </FormContainer>
    );
}
export default Login;