import "./Login.css";
import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"

const Login = () => {
  return (
    <div className="v9_242">
      <div className="v9_243"></div>
      <span className="v9_244">Sign In</span>
      <span className="v9_245">Email Id</span>
      <span className="v9_246">Don’t have account yet?</span>
      <span className="v9_247">Password</span>
      <span className="v9_248 forgot-password">Forgotten Password</span>
      <div className="v9_249">
        <input className="v9_250 login-field-text"></input>
      </div>
      <div className="v9_252">
        <input className="v9_253 login-field-text"></input>
      </div>
      <button className="v9_255 login-big-button">
        Create account
      </button>
      <button className="v9_256 login-small-button ">Login Now</button>
      <p class="or">- OR -</p>
      <div class="v10_307">
        <button class="v10_308">
          <img src={facebook} class="v10_310"></img>
          <span class="v10_309">Continue with Facebook</span>
        </button>
      </div>
      <div class="v10_311">
        <button class="v10_308">
          <img src={google} class="v10_310"></img>
          <span class="v10_309">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};
export default Login;
