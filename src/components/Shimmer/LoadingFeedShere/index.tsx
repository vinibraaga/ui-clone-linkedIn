import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeedShere: React.FC = () => {
  return (
      <Container>
          <Panel className="no-shadow">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </Panel>
      </Container>
  );
};

export default LoadingFeedShere;