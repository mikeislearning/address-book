import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

interface LoadingProps {
  color?: string;
  size?: 'small' | 'large';
}

const Loading: FC<LoadingProps> = ({ color, size }) => (
  <ActivityIndicator size={size} color={color} />
);

Loading.defaultProps = {
  color: 'blue',
  size: 'large',
};

export default Loading;
