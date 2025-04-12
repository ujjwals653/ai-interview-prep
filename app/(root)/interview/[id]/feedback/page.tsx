import React from 'react';

const FeedbackPage = async ({ params }: RouteParams) => {
  const { id } = await params;

  return (
    <div>
      <div>FeedbackPage</div>
      <div>ID: {id}</div>
    </div>
  );
};

export default FeedbackPage;
