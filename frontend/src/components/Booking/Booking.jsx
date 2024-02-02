import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Booking.css";
import useParentContext from "../../hooks/useParentContext";

function BookingForm() {
  const [availabilityId, setAvailabilityId] = useState("");
  const [childId, setChildId] = useState("");
  const [childFirstname, setChildFirstname] = useState("");
  const [childLastname, setChildLastname] = useState("");
  const [parentChildren, setParentChildren] = useState([]);
  const { parentContext } = useParentContext();
  const { availability_id: avID } = useParams();
  const navigate = useNavigate();
  // fetch les enfants du parent connecté
  useEffect(() => {
    const fetchParentChildren = async () => {
      try {
        const response = await fetch("http://localhost:3310/child", {
          headers: {
            Authorization: `Bearer ${parentContext.token}`,
          },
        });
        const childrenData = await response.json();
        setParentChildren(childrenData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchParentChildren();
  }, [parentContext.token]);
  // get the availability id from parametre
  useEffect(() => {
    setAvailabilityId(avID);
  }, [avID]);
  const submitBooking = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3310/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parentContext.token}`,
        },
        body: JSON.stringify({
          availability_id: avID,
          child_id: childId,
          firstname: childFirstname,
          lastname: childLastname,
        }),
      });
    } catch (error) {
      console.error("Error creating booking:", error.message);
    }
  };
  // clear the parametre and redirect to an other page
  const handleRedirect = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const newUrl = "/home/account";
    navigate(newUrl, { replace: true });
  };
  return (
    <div className="bookingContainer">
      <h2 className="bookingHeading">Booking Form</h2>
      <form className="bookingForm" onSubmit={submitBooking}>
        <select
          className="bookingInput"
          id="childId"
          value={childId}
          onChange={(e) => {
            const selectedChildId = e.target.value;
            setChildId(selectedChildId);
            const selectedChild = parentChildren.find(
              // eslint-disable-next-line no-underscore-dangle
              (child) => child._id === selectedChildId
            );
            setChildFirstname(selectedChild?.firstname || "");
            setChildLastname(selectedChild?.lastname || "");
          }}
          required
        >
          <option value="" disabled>
            Select the kid
          </option>
          {parentChildren.map((child) => (
            // eslint-disable-next-line no-underscore-dangle
            <option key={child._id} value={child._id}>
              {child.firstname} {child.lastname}
            </option>
          ))}
        </select>
        <input
          className="bookingInput"
          type="text"
          id="availabilityId"
          value={availabilityId}
          placeholder="avaibilityID"
          readOnly
          required
        />
        <input
          className="bookingInput"
          type="text"
          id="childId"
          value={childId}
          placeholder="Child ID"
          readOnly
          onChange={(e) => setChildId(e.target.value)}
        />
        <input
          className="bookingInput"
          type="text"
          id="childFirstname"
          value={childFirstname}
          placeholder=" Child Firstname"
          readOnly
          onChange={(e) => setChildFirstname(e.target.value)}
        />
        <input
          className="bookingInput"
          type="text"
          id="childLastname"
          value={childLastname}
          placeholder=" Child lastname"
          readOnly
          onChange={(e) => setChildLastname(e.target.value)}
        />
        <button
          className="bookingButton"
          type="submit"
          onClick={handleRedirect}
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
export default BookingForm;
