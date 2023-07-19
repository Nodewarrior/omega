import { useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Illustration from '/Illustration.png';
import arrow from '../assets/arrow.svg';

import './Hero.css';

const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache(),
  });

  const CREATE_USER = gql`
  mutation {
    createUser(
      input: {
        name: "John Doe"
        username: "johndoe"
        email: "johndoe@example.com"
      }
    ) {
      id
      name
      username
      email
    }
  }
`;

function Hero() {
    const [email, setEmail] = useState('');

    const handleStartTrial = () => {
        event.preventDefault();

        const name = "Akshay Kumar"; 
        const username = "akshayk"; 
      
        client
          .mutate({
            mutation: CREATE_USER,
            variables: {
              name: name,
              username: username,
              email: email,
            },
          })
          .then(result => {
            console.log(result.data, 'Mutation executed successfully');
          })
          .catch(error => {
            console.error('Mutation error:', error);
          });          
      };
          

    return (
      <section className="main hero">
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
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleStartTrial}>Start free trial</button>
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
