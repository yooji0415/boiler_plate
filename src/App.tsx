import Logo from '../public/react.svg';

const App = () => {
  return (
    <>
      <Logo />
      <h1>boiler plate for React TypeScript</h1>
      <h1>mode: {process.env.NODE_ENV}</h1>
    </>
  );
};

export default App;
