import {
  Users,
  BookOpen,
  UserCheck,
  Settings,
  BarChart3,
  Search,
  Plus,
  Trash2,
  Check,
  X,
  Upload,
  Edit,
  Moon,
  Star,
} from "lucide-react";
import { NavLink } from "react-router";

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

const Setting = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
          Profile Settings
        </h2>
        <p className="text-sm text-emerald-600">
          Manage your admin profile and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
        <div className="p-4 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20">
          <h3 className="mb-4 text-base font-semibold md:text-lg text-emerald-800">
            Profile Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 text-xl font-bold text-white rounded-full md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 md:text-2xl">
                  A
                </div>
                <button className="absolute p-2 text-white transition-colors rounded-full shadow-lg -bottom-2 -right-2 bg-emerald-600 hover:bg-emerald-700">
                  <Upload className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Admin User"
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Email
              </label>
              <input
                type="email"
                defaultValue="admin@islamic-platform.com"
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Bio
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about yourself..."
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
              <Edit className="w-4 h-4" />
              <span>Update Profile</span>
            </button>
          </div>
        </div>

        <div className="p-4 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20">
          <h3 className="mb-4 text-base font-semibold md:text-lg text-emerald-800">
            Platform Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Platform Name
              </label>
              <input
                type="text"
                defaultValue="Islamic Learning Platform"
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="contact@islamic-platform.com"
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700">
                Platform Description
              </label>
              <textarea
                rows="4"
                defaultValue="A comprehensive Islamic learning platform dedicated to spreading knowledge and understanding of Islam through quality courses and resources."
                className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50">
              <span className="text-sm font-medium text-emerald-700">
                Email Notifications
              </span>
              <button className="relative inline-flex items-center h-6 transition-colors rounded-full w-11 bg-emerald-600">
                <span className="inline-block w-4 h-4 transition-transform transform translate-x-6 bg-white rounded-full" />
              </button>
            </div>
            <button className="w-full px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
