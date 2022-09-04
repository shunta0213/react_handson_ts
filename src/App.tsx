import React, { useState } from 'react';

import { useInput } from './hooks/useInput';

import UserIdForm from './components/UserIdForm';
import GithubUser from './components/GithubUser';
import RepoReadme from './components/RepoReadme';
import UserRepositories from './components/UserRepositories';

function App() {
  const [loginProp, resetLogin] = useInput("")
  const [loginId, setLoginId] = useState("shunta0213")
  const [repo, setRepo] = useState("gittest")

  // if (!loginId) return (<UserIdForm loginProp={loginProp} resetLogin={resetLogin} setLoginId={setLoginId} />)
  return (
    <>
      <UserIdForm loginProp={loginProp} resetLogin={resetLogin} setLoginId={setLoginId} />
      {loginId && <GithubUser login={loginId} />}
      {loginId && <UserRepositories login={loginId} onSelect={setRepo} />}
      {(loginId && repo) && <RepoReadme repo={repo} login={loginId} />
      }
    </>
  );
}

export default App;
