import "./Footer.css"
import socialmedia from "../../assets/images/social-media.png";

const Footer = () => {
  return (
    <div className="big-wrapper-div">
        <div className="small-wrapper-div">
            <div className="container">
            <div class="row">
          <div class="col-md-3">
            <div class="h3 text-big">Get In Touch</div>
            <p class="paragraph">the quick fox jumps over the <br />lazy dog</p>
            <img class="social-media" src={socialmedia} />
          </div>
          <div class="col-md-3-1">
            <div class="h3-1 text-big">Company info</div>
            <div class="div-1">
              <div class="link text-small">About Us</div>
              <div class="link text-small">Carrier</div>
              <div class="link text-small">We are hiring</div>
              <div class="link text-small">Blog</div>
            </div>
          </div>
          <div class="col-md-3-2">
            <div class="h3-2 text-big">Features</div>
            <div class="div-2">
              <div class="link text-small">Business Marketing</div>
              <div class="link text-small">User Analytic</div>
              <div class="link text-small">Live Chat</div>
              <div class="link text-small">Unlimited Support</div>
            </div>
          </div>
          <div class="col-md-3-3">
            <div class="h3-3 text-big">Resources</div>
            <div class="div-3">
              <div class="link text-small">IOS &amp; Android</div>
              <div class="link text-small">Watch a Demo</div>
              <div class="link text-small">Customers</div>
              <div class="link text-small">API</div>
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;