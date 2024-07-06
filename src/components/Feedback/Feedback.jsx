import Options from "../Options/Options";

const Feedback = (
  {updateFeedback,
  handleReset,
  totalFeedback,
  feedbackPercentage,
  feedbacks}
) => {
  return (
    <>
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <ul>
          <li>Good : {feedbacks.good}</li>
          <li>Neutral : {feedbacks.neutral}</li>
          <li>Bad : {feedbacks.bad}</li>
          <li>Total : {totalFeedback}</li>
          <li>Positive : {feedbackPercentage}%</li>
        </ul>
      )}
    </>
  );
};

export default Feedback;
