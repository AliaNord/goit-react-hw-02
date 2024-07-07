const Feedback = (
  {totalFeedback,
  feedbackPercentage,
  feedbacks}
) => {
  return (
    <>
        <ul>
          <li>Good : {feedbacks.good}</li>
          <li>Neutral : {feedbacks.neutral}</li>
          <li>Bad : {feedbacks.bad}</li>
          <li>Total : {totalFeedback}</li>
          <li>Positive : {feedbackPercentage}%</li>
        </ul>
    </>
  );
};

export default Feedback;
