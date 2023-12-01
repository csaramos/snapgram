import { Route, Routes } from 'react-router-dom';
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import SinginForm from './_auth/forms/SinginForm';
import SingupForm from './_auth/forms/SingUpForm';
import { Home } from './_root/pages';
import RootLayout from './_root/RootLayout';

const App = () => {
  console.log('is entering here?>?');
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SinginForm />} />
          <Route path='/sign-in' element={<SingupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
