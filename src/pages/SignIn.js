import { withRouter } from "react-router";
import SignInForm from "../components/forms/SignInForm";
import "./SignIn.css";

function SignInPage() {
  return (
    <section className="signin">

      <SignInForm />
    </section>
  );
}

export default withRouter(SignInPage);
