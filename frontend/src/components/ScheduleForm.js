import React, { useState } from "react";

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    case: "",
    date: "",
    location: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // console.log(formData.case,formData.date,formData.location,formData.description);
  console.log(formData)

  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(`http://localhost:5000/registrar/schedulecase/${formData.case}`);
      const response = await fetch(
        `http://localhost:5000/registrar/schedulecase/${formData.case}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Schedule created successfully!");
        setFormData({
          case: "",
          date: "",
          location: "",
          description: "",
        });
      } else {
        alert("Failed to create schedule");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the schedule");
    }
  };

  return (
    <div className="container">
        <div className="row">
        <div className="col-12">
          <h1 className="text-center mx-auto mt-3">Add New Schedule</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="case" className="form-label">
            Case ID
          </label>
          <input
            type="text"
            className="form-control"
            id="case"
            name="case"
            value={formData.case}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Create Schedule
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
