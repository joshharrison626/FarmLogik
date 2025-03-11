import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Cat, 
  Calendar, 
  BarChart2, 
  Menu, 
  X,
  Plus,
  Stethoscope,
  ClipboardList
} from 'lucide-react';

type SidebarProps = {
  farmName: string;
};

const Sidebar = ({farmName}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/livestock', icon: Cat, label: 'Livestock' },
    { path: '/tasks', icon: Calendar, label: 'Tasks' },
    { path: '/analytics', icon: BarChart2, label: 'Analytics' },
  ];

  const fabActions = [
    { icon: Cat, label: 'Add Animal', action: () => console.log('Add animal') },
    { icon: Stethoscope, label: 'Add Vet Record', action: () => console.log('Add vet record') },
    { icon: ClipboardList, label: 'Add Task', action: () => console.log('Add task') },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
        <div className="h-full w-64 bg-white border-r shadow-lg flex flex-col">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-800">{farmName}</h1>
          </div>

          <nav className="flex-1 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon size={20} className="mr-3" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="relative p-4">
            <button
              onClick={() => setIsFabOpen(!isFabOpen)}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={24} />
            </button>

            {isFabOpen && (
              <div className="absolute bottom-20 left-4 space-y-2">
                {fabActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-48 flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <action.icon size={20} className="mr-3 text-blue-600" />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;