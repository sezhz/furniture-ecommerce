import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="feedback">
        <h2>Leave feedback about our products:</h2>
        <form className="feedback-form">
          <input
            type="email"
            className="feedback-input"
            placeholder="example@email.com"
          />
          <textarea className="feedback-input" placeholder="feedback" />
          <button className="feedback-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
