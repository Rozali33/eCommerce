import { Route, Routes } from 'react-router-dom';
import { SignIn, Main, EmptyPage, SignUp } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<EmptyPage />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
