import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useAuth = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <TaskContext.Provider value={{ user, setUser }}>
      {children}
    </TaskContext.Provider>
  );
};
