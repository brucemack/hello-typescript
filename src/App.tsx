import React, { FC } from 'react';
import Title from './Title';
import { Comp } from 'hello-typescript-package';

const App: FC = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Title title="title 5" subtitle="subtitle 2"/>
      <Comp message="Hi Izzy!"/>
    </>
  );
};

export default App;
