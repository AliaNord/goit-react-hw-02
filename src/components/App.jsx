import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

const App = () => {
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
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          feedbackPercentage={feedbackPercentage}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </>
  );
};

export default App;
