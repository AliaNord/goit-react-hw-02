import { useEffect, useState } from "react";
import Options from "../Options/Options";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedbacks"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const feedbackPercentage = totalFeedback
    ? Math.round((feedbacks.good / totalFeedback) * 100)
    : 0;
  const handleReset = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
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
