import { Route, Routes } from 'react-router-dom';
import { SignIn, Main, SignUp } from './pages';
import Error from './pages/Error/Error';

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Error />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
