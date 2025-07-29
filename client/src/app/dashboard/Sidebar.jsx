import {
  Users,
  BookOpen,
  UserCheck,
  Settings,
  BarChart3,
  Moon,
  Star,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";

// Islamic Pattern Component
const IslamicPattern = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="grid h-full grid-cols-8 gap-4">
      {[...Array(64)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-emerald-600"
        >
          <Star className="w-4 h-4" />
        </div>
      ))}
    </div>
  </div>
);

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button - only on small screens */}
      <button
        className="fixed z-50 p-2 text-white rounded-md top-4 left-4 bg-emerald-700 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 transform bg-gradient-to-b from-emerald-800 to-emerald-900 border-r border-emerald-700/50 shadow-xl w-64
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative  md:w-64`}
      >
        <div className="p-4 border-b border-emerald-700/50">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
            <div className="hidden md:block lg:block">
              <h1 className="text-lg font-bold text-white">Islamic Admin</h1>
              <p className="text-xs text-emerald-200">Dashboard Panel</p>
            </div>
          </div>
        </div>

        <nav className="px-2 mt-4">
          {[
            { id: "", label: "Analytics", icon: BarChart3 },
            { id: "student-management", label: "Students", icon: Users },
            { id: "course-management", label: "Courses", icon: BookOpen },
            { id: "admin-management", label: "Admins", icon: UserCheck },
            { id: "settings", label: "Settings", icon: Settings },
          ].map(({ id, label, icon: Icon }) => (
            <NavLink
              to={id}
              key={id}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 mb-1 ${
                activeTab === id
                  ? "bg-emerald-700 text-white shadow-lg"
                  : "text-emerald-200 hover:bg-emerald-700/50 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)} // close on selection in mobile
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute hidden bottom-4 left-4 right-4 md:block lg:block">
          <div className="p-3 text-center rounded-lg bg-emerald-700/50">
            <Moon className="w-6 h-6 mx-auto mb-2 text-emerald-200" />
            <p className="text-xs text-emerald-200">اللَّهُمَّ بَارِكْ لَنَا</p>
            <p className="text-xs text-emerald-300">May Allah bless us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
