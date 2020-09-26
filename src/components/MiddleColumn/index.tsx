import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';
import LoadingFeedShere from '../Shimmer/LoadingFeedShere';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

const MiddleColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShere />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare/>
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
