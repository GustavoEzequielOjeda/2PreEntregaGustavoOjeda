import MainLayout from './layouts/MainLayout';
import MainRouter from './routes/MainRouter';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return(
    <MainLayout>
      <MainRouter />
    </MainLayout>
  );
};

export default App;