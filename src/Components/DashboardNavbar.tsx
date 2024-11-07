import { Bell, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../contexts/contextprovider';


const DashboardNavbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    const handleNotification = () => {
        navigate('/notification');
    };

    const handleSetting = () => {
        navigate('/setting');
    };

    return (
        <nav className="bg-white shadow-sm px-8 py-4 h-20 flex justify-between items-center">
            <div className="font-bold text-gray-800">
                <img src="/logo1.png" alt="logo" className="h-32 w-32" />
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleNotification}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Bell className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={handleSetting}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Settings className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
