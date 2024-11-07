import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash, Eye, X, Bell, Settings, LogOut } from 'lucide-react';

// Define types for patient details
interface EmergencyContact {
    name: string;
    relation: string;
    phone: string;
}

interface Appointment {
    date: string;
    time: string;
    doctor: string;
    department: string;
}

interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    bloodType: string;
    address: string;
    email: string;
    phone: string;
    emergencyContact: EmergencyContact;
    medicalHistory: string[];
    lastVisit: string;
    upcomingAppointments: Appointment[];
}

// Define props for the PatientList component
interface PatientListProps {
    searchTerm?: string;
    onPatientSelect?: (patient: Patient) => void;
}

// Define props for the PatientDetails component
interface PatientDetailsProps {
    patient: Patient;
    onClose: () => void;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-indigo-600">Patient Details</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5" />
                </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className="text-sm text-gray-500">Name</h3>
                    <p className="text-lg font-semibold text-gray-800">{patient.name}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Age/Gender</h3>
                    <p className="text-lg font-semibold text-gray-800">{patient.age} / {patient.gender}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Blood Type</h3>
                    <p className="text-lg text-gray-800">{patient.bloodType}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Address</h3>
                    <p className="text-lg text-gray-800">{patient.address}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Contact</h3>
                    <p className="text-lg text-gray-800">{patient.phone}<br />{patient.email}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500">Last Visit</h3>
                    <p className="text-lg text-gray-800">{patient.lastVisit}</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <button
                    onClick={() => {
                        onClose(); // Close the modal first
                        navigate(`/patpro/${patient.id}`); // Then navigate
                    }}
                    className="border-2 border-black p-2 rounded-xl hover:scale-95 transform duration-200 hover:bg-blue-500 hover:text-white"
                >
                    See more Details
                </button>
            </div>
        </div>
    </div>
);

const PatientList: React.FC<PatientListProps> = ({ searchTerm = '', onPatientSelect = () => {} }) => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState<Patient[]>([
        {
            id: 'P-12345',
            name: "John Doe",
            age: 45,
            gender: "Male",
            bloodType: "O+",
            address: "123 Main St, New York",
            email: "john.doe@email.com",
            phone: "+1 (555) 123-4567",
            emergencyContact: {
                name: "Jane Doe",
                relation: "Spouse",
                phone: "+1 (555) 987-6543"
            },
            medicalHistory: [
                "Diabetes Type 2 - Diagnosed 2019",
                "Hypertension - Diagnosed 2020",
                "Hip Replacement - 2021"
            ],
            lastVisit: "2024-03-20",
            upcomingAppointments: [
                {
                    date: "Oct 30, 2024",
                    time: "09:00 AM",
                    doctor: "Dr. Michael Brown",
                    department: "Internal Medicine"
                }
            ]
        },
        // More patients here...
    ]);

    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes((searchTerm || '').toLowerCase())
    );

    const handleSubmit = (patientId: string) => {
        navigate(`/patpro/${patientId}`);
    };

    const handleLogout = () => navigate('/login');
    const handleNotification = () => navigate('/notification');
    const handleSetting = () => navigate('/setting');

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this patient?')) {
            setPatients(patients.filter(patient => patient.id !== id));
        }
    };

    const handlePatientSelect = (patient: Patient) => {
        setSelectedPatient(patient);
        setIsDetailsOpen(true);
        if (typeof onPatientSelect === 'function') onPatientSelect(patient);
    };

    return (
        <>
            <nav className="bg-white shadow-sm px-8 py-4 border-b-2 h-20 flex justify-between items-center">
                <div className="font-bold text-gray-800">
                    <img src="/logo1.png" alt="logo" className="h-32 w-32" />
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={handleNotification} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Bell className="w-6 h-6 text-gray-600" />
                    </button>
                    <button onClick={handleSetting} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Settings className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </nav>

            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200 mt-6 mx-auto max-w-4xl">
                <table className="min-w-full divide-y divide-gray-200 text-gray-800">
                    <thead className="bg-indigo-50">
                        <tr>
                            {['Name', 'Age/Gender', 'Contact', 'Last Visit', 'Actions'].map((header) => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPatients.map((patient) => (
                            <tr key={patient.id} className="hover:bg-indigo-100 transition duration-150 ease-in-out">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-gray-800">{patient.name}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{patient.age} / {patient.gender}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{patient.phone}<br />{patient.email}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{patient.lastVisit}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-3">
                                        <button onClick={() => handlePatientSelect(patient)} className="text-indigo-600 hover:text-indigo-800">
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        <button className="text-green-600 hover:text-green-800">
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleDelete(patient.id)} className="text-red-600 hover:text-red-800">
                                            <Trash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isDetailsOpen && selectedPatient && (
                <PatientDetails patient={selectedPatient} onClose={() => setIsDetailsOpen(false)} />
            )}
        </>
    );
};

export default PatientList;
