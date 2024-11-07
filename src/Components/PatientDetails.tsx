import React from 'react';
import { useParams } from 'react-router-dom';
import { User, Calendar, Phone, Mail, MapPin, Activity } from 'lucide-react';

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
    upcomingAppointments: Appointment[];
}

interface PatientsData {
    [key: string]: Patient;
}

interface PatientProfileProps {
    id?: string;
    isModal?: boolean;
}

const PatientDetails: React.FC<PatientProfileProps> = ({ id: propsId, isModal }) => {
    const { id: paramsId } = useParams<{ id: string }>();
    const trimmedId = ((propsId || paramsId) ?? undefined)?.trim();

    const patientsData: PatientsData = {
        'P-12345': {
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
            upcomingAppointments: [
                {
                    date: "Oct 30, 2024",
                    time: "09:00 AM",
                    doctor: "Dr. Michael Brown",
                    department: "Internal Medicine"
                }
            ]
        },
        // Add more patients here if needed
    };

    if (!trimmedId) {
        return <div>Invalid patient ID</div>;
    }

    const patient = patientsData[trimmedId];
    if (!patient) {
        return <div>Patient not found</div>;
    }

    const containerClasses = isModal 
        ? "bg-gray-100"
        : "min-h-screen bg-gray-100 py-8";

    return (
        <div className={containerClasses}>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-xl">
                    <div className="bg-green-600 h-32"></div>
                    <div className="relative px-6 pb-6">
                        <div className="absolute -top-16">
                            <img
                                src="/api/placeholder/128/128"
                                alt="Patient profile"
                                className="w-32 h-32 rounded-full border-4 border-white bg-gray-200"
                            />
                        </div>
                        <div className="pt-20">
                            <h1 className="text-3xl font-bold text-gray-900">{patient.name}</h1>
                            <p className="text-gray-600 flex items-center gap-2 mt-1">
                                <User className="w-5 h-5" />
                                Patient ID: {patient.id}
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Personal Information */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Age</p>
                                        <p className="text-gray-900">{patient.age} years</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Gender</p>
                                        <p className="text-gray-900">{patient.gender}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Blood Type</p>
                                        <p className="text-gray-900">{patient.bloodType}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Medical History */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Medical History</h2>
                                <ul className="space-y-2">
                                    {patient.medicalHistory.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Activity className="w-4 h-4 text-green-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Upcoming Appointments */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
                                {patient.upcomingAppointments.map((appointment, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                        <Calendar className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="font-medium">{appointment.date} at {appointment.time}</p>
                                            <p className="text-gray-600">{appointment.doctor} - {appointment.department}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Contact Information */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-green-600" />
                                        <span>{patient.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-green-600" />
                                        <span>{patient.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-green-600" />
                                        <span>{patient.address}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
                                <p className="font-medium">{patient.emergencyContact.name} - {patient.emergencyContact.relation}</p>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <span>{patient.emergencyContact.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
