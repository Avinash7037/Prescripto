import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  // 🔍 1. Check token & API call
  useEffect(() => {
    console.log("Doctor token:", dToken);

    if (dToken) {
      console.log("Calling getAppointments()");
      getAppointments();
    }
  }, [dToken]);

  // 🔍 2. Check appointments data
  console.log("Appointments state:", appointments);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-4 text-xl font-semibold text-gray-700">
        All Appointments
      </p>

      <div className="bg-white border border-gray-200 rounded-lg text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto shadow-sm">
        {/* Header */}
        <div className="max-sm:hidden grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-2 py-3 px-6 border-b bg-gray-50 text-gray-600 font-medium sticky top-0 z-10">
          <p>#</p>
          <p>Patients</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p className="text-center">Action</p>
        </div>

        {/* Empty state */}
        {appointments.length === 0 && (
          <p className="p-6 text-center text-gray-500">No appointments found</p>
        )}

        {/* Appointment rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-2 items-center py-3 px-6 border-b hover:bg-gray-50 transition"
          >
            <p className="text-gray-600">{index + 1}</p>

            <div className="flex items-center gap-3">
              <img
                className="w-9 h-9 rounded-full object-cover border"
                src={item.userData?.image}
                alt=""
              />
              <p className="font-medium text-gray-700">{item.userData?.name}</p>
            </div>

            <p
              className={`font-medium ${
                item.payment ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {item.payment ? "Online" : "CASH"}
            </p>

            <p className="text-gray-600">
              {item.userData?.dob ? calculateAge(item.userData.dob) : "-"}
            </p>

            <p className="text-gray-600">
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            <p className="font-semibold text-gray-700">
              {currency}
              {item.amount}
            </p>

            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex justify-center gap-4">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="w-7 h-7 cursor-pointer hover:scale-125 transition-transform"
                  src={assets.cancel_icon}
                  alt=""
                />
                <img
                  onClick={() => completeAppointment(item._id)}
                  className="w-7 h-7 cursor-pointer hover:scale-125 transition-transform"
                  src={assets.tick_icon}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
