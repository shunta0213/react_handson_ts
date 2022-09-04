import React, { useState } from 'react';

import RenderProp from './components/organism/renderProp';
import UserIdForm from './components/organism/userIdform';
import { useInput } from './hooks/useInput';

function App() {
  const [loginProp, resetLogin] = useInput("")
  const [loginId, setLoginId] = useState("")
  return (
    <>
      <UserIdForm loginProp={loginProp} resetLogin={resetLogin} setLoginId={setLoginId} />
      <RenderProp loginId={loginId} />
    </>
  );
}

export default App;
