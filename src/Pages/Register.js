import FormHeader from "../Components/FormHeader";
import Input from "../Components/Input";
import Logo from '../Components/Logo'
import { FormContainer,Form,SubmitDiv,Submit, InputDiv } from "../Components/Styled";

const Register = () => {
    return (
      <FormContainer>
        <Logo />
        <Form>
          <FormHeader header="Login" />
          <InputDiv>
            <Input name="email" type="email" />
            <Input name="password" type="password" />
            <Input name="confirm password" type="password" />
          </InputDiv>
          <SubmitDiv>
            <span>Already have an account?</span>
            <Submit type="submit">submit</Submit>
          </SubmitDiv>
        </Form>
      </FormContainer>
    );
}
export default Register;