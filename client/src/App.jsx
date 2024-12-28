import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';

import Login from './pages/Login';
import Register from './pages/Register';
import TaskManagement from './pages/TaskManagement';
import TaskDetail from './components/TaskDetail';
import TaskEditForm from './components/TaskEditForm';

import AuthRoute from './components/AuthRoute';
import TaskForm from './components/TaskForm';


const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/task-management" element={<TaskManagement />} />
          <Route path="/task/new" element={<TaskForm/>}/>
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/task/edit/:id" element={<TaskEditForm />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
