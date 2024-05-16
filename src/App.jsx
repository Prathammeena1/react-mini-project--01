import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Form from './component/Form';
import Show from './component/Show';

const App = () => {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem('Users')) || []);  
  return (
    <div className='min-h-screen w-full bg-zinc-800'>
      <Form users={users} setusers={setusers}/>
      <Show users={users} setusers={setusers}/>
    </div >
  );
};

export default App;
