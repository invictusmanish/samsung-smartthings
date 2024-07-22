import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import { routes } from '../utility/constant';
import Carlita from '../pages/Landing/Usecases/Carlita';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={routes.HOME}
        element={<Landing />}
      />
      <Route
        path={routes.USE_CASE_CARLITA}
        element={<Carlita />}
      />
    </Routes>
  );
};

export default AppRouter;
