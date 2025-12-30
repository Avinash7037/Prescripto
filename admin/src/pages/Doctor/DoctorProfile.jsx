import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorProfile = () => {
  const {
    dToken,
    profileData,
    setProfileData,
    getProfileData,
    updateDoctorProfile,
  } = useContext(DoctorContext);

  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  // enter edit mode
  const handleEdit = () => {
    setTempData({ ...profileData });
    setIsEdit(true);
  };

  // cancel edit
  const handleCancel = () => {
    setProfileData(tempData);
    setIsEdit(false);
  };

  // save profile
  const handleSave = async () => {
    await updateDoctorProfile(
      profileData.fees,
      profileData.address,
      profileData.available
    );
    setIsEdit(false);
  };

  return (
    profileData && (
      <div className="w-full max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-md p-6 flex gap-8">
          {/* Profile Image */}
          <div>
            <img
              src={profileData.image}
              alt=""
              className="w-40 h-40 rounded-xl object-cover border"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {profileData.name}
            </h2>

            <p className="text-gray-600 mt-1">
              {profileData.degree} • {profileData.speciality}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {profileData.experience}
            </span>

            {/* About */}
            <div className="mt-4">
              <p className="font-medium">About</p>
              <p className="text-gray-600">{profileData.about}</p>
            </div>

            {/* Fees */}
            <div className="mt-4">
              <p className="font-medium">Appointment Fee</p>
              {isEdit ? (
                <input
                  type="number"
                  className="mt-1 border rounded px-3 py-1 w-32"
                  value={profileData.fees}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fees: e.target.value,
                    }))
                  }
                />
              ) : (
                <p className="text-green-600 font-semibold">
                  {currency} {profileData.fees}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="mt-4">
              <p className="font-medium">Address</p>
              {isEdit ? (
                <>
                  <input
                    className="border rounded px-3 py-1 w-full mt-1"
                    value={profileData.address.line1}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line1: e.target.value,
                        },
                      }))
                    }
                  />
                  <input
                    className="border rounded px-3 py-1 w-full mt-2"
                    value={profileData.address.line2}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line2: e.target.value,
                        },
                      }))
                    }
                  />
                </>
              ) : (
                <p className="text-gray-600">
                  {profileData.address?.line1}
                  <br />
                  {profileData.address?.line2}
                </p>
              )}
            </div>

            {/* Availability */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={profileData.available}
                disabled={!isEdit}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    available: e.target.checked,
                  }))
                }
              />
              <label>Available</label>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              {!isEdit ? (
                <button
                  onClick={handleEdit}
                  className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
