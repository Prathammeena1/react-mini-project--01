import { nanoid } from 'nanoid';
import React, { useState, useRef } from 'react';
import Form from './component/Form';
import Show from './component/Show';

const App = () => {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem('Users')) || []);
  const main = useRef(null)
  return (
    <div ref={main} className='min-h-screen w-full py-5 overflow-hidden bg-zinc-800'>
      <Form />
      <Show main={main} />
    </div >
  );
};

export default App;
