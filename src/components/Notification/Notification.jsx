const Notification = ({totalFeedback}) => {
  return <>{totalFeedback === 0 && <div>No feedback yet</div>}</>;
};

export default Notification;
