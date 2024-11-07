import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

interface Appointment {
    id: number;
    patient: string;
    date: string;
    time: string;
    type: string; // Assuming you might need this in the future
}

const AppointmentScheduling: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([
        { id: 1, patient: "John Doe", date: "2024-10-25", time: "10:00", type: "Check-up" },
        { id: 2, patient: "Jane Smith", date: "2024-10-25", time: "11:30", type: "Follow-up" }
    ]);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Appointments
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600">
                    <Plus className="h-4 w-4" />
                    New Appointment
                </button>
            </div>
            <div className="space-y-4">
                {appointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">{apt.patient}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                {apt.date} at {apt.time}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                                Reschedule
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppointmentScheduling;
