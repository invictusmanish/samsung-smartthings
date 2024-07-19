import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import { routes } from '../utility/constant';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={routes.HOME}
        element={<Landing />}
      />
    </Routes>
  );
};

export default AppRouter;
