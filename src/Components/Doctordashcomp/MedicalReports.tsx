import React, { useState } from 'react';
import { FileText, Plus } from 'lucide-react';

// Define an interface for the report type
interface MedicalReport {
    id: number;
    title: string;
    date: string;
    status: 'final' | 'pending'; // Status can be either 'final' or 'pending'
}

const MedicalReports: React.FC = () => {
    const [reports, setReports] = useState<MedicalReport[]>([
        { id: 1, title: "Blood Test Results", date: "2024-10-20", status: "final" },
        { id: 2, title: "X-Ray Report", date: "2024-10-18", status: "pending" }
    ]);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Medical Reports
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600">
                    <Plus className="h-4 w-4" />
                    Upload Report
                </button>
            </div>
            <div className="space-y-4">
                {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">{report.title}</p>
                            <p className="text-sm text-gray-600">{report.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded ${
                                report.status === 'final' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {report.status.toUpperCase()}
                            </span>
                            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicalReports;
