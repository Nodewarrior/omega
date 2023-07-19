import Illustration from '/Illustration.png';
import arrow from '../assets/arrow.svg';

function Hero() {
    return (
      <section className="hero">
        <div className="home__container">
          <section>
            <div className="outer-container">
              <div className="inner-container">
                <div className="inner-text">We’re hiring</div>
              </div>
              <div className="content">
                <div className="content-text">Visit our careers page</div>
                <div className="arrow">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className="hero-text">
              <div className="first-line">A better way to</div>
              <div className="second-line">ship web apps</div>
            </div>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </section>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button>Start free trial</button>
          </form>
          <p className="help">
            Start your free 14 day trial, no credit card necessary. By providing
            your email address, you agree to our
            <a href="#">Terms of Service</a>.
          </p>
        </div>
        <div className="hero-image">
          <img src={Illustration} alt="Descriptive text about the image" />
        </div>
      </section>
    );
  }

export default Hero; 
