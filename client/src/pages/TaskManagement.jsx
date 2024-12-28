import React, { useEffect, useState } from 'react';
import { getTasks, createTask } from '../services/taskService';
import TaskList from '../components/TaskList';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const userName = 'Gurliv';

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        console.log("Fetched tasks:", data); // Debug log
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleAddTask = async (task) => {
    try {
      const createdTask = await createTask(task);
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (!task || !task.name || !task.description) {
      console.warn("Invalid task encountered:", task);
      return false;
    }
    return (
      task.name.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <Header userName={userName} onSearch={handleSearch} />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Task Management</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <TaskList tasks={filteredTasks} />
          <TaskCard onClick={() => setModalOpen(true)} />
        </div>
        
      </div>
      <TaskForm
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
};


export default TaskManagement;
