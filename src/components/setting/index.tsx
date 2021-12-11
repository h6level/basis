import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <section>
      <h1>****** Home Page ******</h1>
      <p><Link to="/">Home Page</Link></p>
    </section>
  );
};

export default Home;
