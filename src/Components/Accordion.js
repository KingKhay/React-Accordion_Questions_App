import SingleQuestion from "./SingleQuestion";
import questions from "../data";
const Accordion = () => {
  return (
    <section className="accordion">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Accordion;
