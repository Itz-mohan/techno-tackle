import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

//Routes
import indexRoutes from './routes';

//Setting Routes
const Routing = indexRoutes.map((route, i) => {
  return <Route key={i} path={route.path} element={<route.component />} />;
});

function App() {
  return (
    <Router>
      <Routes>{Routing}</Routes>
    </Router>
  );
}

export default App;
