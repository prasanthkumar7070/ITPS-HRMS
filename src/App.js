
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashbord from './Component/Common/Dashboard'
import SideNavbar from './Component/Common/SideNavbar'
import Employes from './Component/Employees/Employes';
import EmployeesCreate from './Component/Employees/EmployeesCreate';
import EmployeesList from './Component/Employees/EmployeesList';
import EmployeesImport from './Component/Employees/EmployeesImport';
import Awards from './Component/Employees/Awards';
import Notice from './Component/Employees/Notice';
import Step1 from './Steps/Step1';
function App() {
  return (
    <div>
      <SideNavbar />
      <Routes>
        <Route path='/' element={<Dashbord />} />
        <Route path='/employee' element={<Employes />}>
          <Route path='Create' element={<EmployeesCreate />}>
            {/* <Route path='step1' element={<Step1 />} /> */}
          </Route>
          <Route path='List' element={<EmployeesList />} />
          <Route path='Import' element={<EmployeesImport />} />
          <Route path='award' element={<Awards />} />
          <Route path='notice' element={<Notice />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
