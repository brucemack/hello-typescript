import React, { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;  
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Subtitle: {subtitle}</p>
    </>
  );
};

export default Title;

