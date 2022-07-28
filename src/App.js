import Accordion from "./Components/Accordion";

const App = () => {
  return (
    <div className="App">
      <section className="container">
        <div className="title">
          <p>Frequently Asked Questions and Answers</p>
          <div className="underline"></div>
        </div>
        <div className="accordion-section">
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default App;
