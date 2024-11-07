import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Activity, FileText, Bell, Settings, LogOut, X, MessageCircle } from 'lucide-react';
import StatsGrid from '../Components/Doctordashcomp/StatsGrid';
import AppointmentList from '../Components/Doctordashcomp/AppointmentList';
import QuickActions from '../Components/Doctordashcomp/QuickActions';
import useAuthContext from '../contexts/contextprovider';
import DashboardNavbar from '../Components/DashboardNavbar';


const DoctorDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    // const { user, logout } = useAuthContext();
    
  

    const handleNotification = () => {
        navigate('/notification');
    }

    const handleSetting = () => {
        navigate('/setting');
    }

    const toggleChat = () => {
        setIsChatOpen(prev => !prev);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation Bar */}
            
          <DashboardNavbar/>

            {/* Main Content */}
            <div className="p-8">
                <StatsGrid />
                <AppointmentList />
                <QuickActions />
            </div>

            {/* Chat Interface */}
            <div 
                className={`fixed bottom-24 right-5 transform transition-all duration-300 ease-in-out ${isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
            >
                <div 
                    className="bg-white rounded-2xl shadow-2xl border border-gray-200"
                    style={{
                        width: '384px', // w-96 equivalent
                        height: '600px'
                    }}
                >
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-between items-center rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img 
                                    src="/doc.png" 
                                    alt="AI Assistant" 
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Medical Assistant</h3>
                                <span className="text-xs text-blue-100">Online</span>
                            </div>
                        </div>
                        <button 
                            onClick={toggleChat}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    {/* Chat Content Container */}
                    <div 
                        className="relative"
                        style={{ height: 'calc(570px - 72px)' }} // Total height minus header height
                    >
                        <iframe
                            src="https://med-bot-sable.vercel.app/"
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                border: 'none',
                                overflow: 'scroll'
                            }}
                            title="Medical Assistant Chat"
                            sandbox="allow-same-origin allow-scripts allow-forms"
                        />
                    </div>
                </div>
            </div>

            {/* Enhanced AI Chatbot Button */}
            <div className="fixed bottom-5 right-5 z-20">
                <div className={`absolute -top-12 right-0 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                    <div className="bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                        Chat with Medical Assistant
                    </div>
                </div>
                <button
                    onClick={toggleChat}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`group relative bg-transparent border-2 border-black p-2 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${isChatOpen ? 'rotate-0' : 'hover:scale-110'}`}
                >
                    <div className="relative">
                        <img
                            src="/doc.png"
                            alt="AI Chatbot"
                            className="h-12 w-12 rounded-full transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="absolute -top-1 -right-1">
                        <div className="relative">
                            <div className="animate-ping absolute h-3 w-3 rounded-full bg-red-400 opacity-75"></div>
                            <div className="relative h-3 w-3 rounded-full bg-red-500"></div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DoctorDashboard;
