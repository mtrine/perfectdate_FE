"use client";
import { useState } from "react";
import AlertSendContactSuccess from "./AlertSendContactSuccess";
import '@/styles/formContact.css'
import FormContent from "./FormContent";
export default function FormContact() {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div className="relative">
            <FormContent setShowAlert={setShowAlert} />
            {showAlert && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setShowAlert(false)}
                >
                    <AlertSendContactSuccess />
                </div>
            )}
        </div>
    );
}