import React from 'react';

const InterviewDetailsPage = async ({ params }: RouteParams) => {
  const { id } = await params;

  return <div>Interview ID: {id}</div>;
};

export default InterviewDetailsPage;
