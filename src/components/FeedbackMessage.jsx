

function FeedbackMessage({ feedback }) {
  if (!feedback) return null;

  return (
    <div className="feedback">
      <p>{feedback}</p>
    </div>
  );
}

export default FeedbackMessage;