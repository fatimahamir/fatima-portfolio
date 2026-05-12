
import React, { useState, useEffect } from 'react';
import AdmissionModal from '../modals/AdmissionModal';


import image1 from '../assets/WhatsApp Image 2025-10-21 at 20.06.53_8e7375f3.jpg';
import image2 from '../assets/WhatsApp Image 2025-10-21 at 20.06.54_71af0f4c.jpg';
import image3 from '../assets/images (8).jpeg';
import image4 from '../assets/portrait-indian-male-teacher-standing-260nw-1765602338.jpg';
import image5 from '../assets/images (7).jpeg';
import image6 from '../assets/smiling-young-indian-business-man-260nw-2187607303.jpg';
import image7 from '../assets/imgi_9_doc-4.jpg';
import image8 from '../assets/WhatsApp Image 2025-10-21 at 20.06.53_932ffebe.jpg';

const FacultyManagement = () => {
  
  
  const initialFaculty = [
    { id: 1, name: "Ayesha Khan", subject: "Urdu And Islamic Studies", description: "Believes in nurturing critical thinking through storytelling and creative expression.", image: image1 },
    { id: 2, name: "Mr. Bilal Ahmed", subject: "Mathematics", description: "Makes math fun with real-life applications and problem-solving challenges.", image: image2 },
    { id: 3, name: "Ms. Fatima Naseem", subject: "Chemistry", description: "Inspires curiosity through hands-on lab experiments and scientific inquiry.", image: image3 },
    { id: 4, name: "Mr. Omar Farooq", subject: "Computer Science", description: "Teaches coding with creativity, logic, and real-world tech projects.", image: image4 },
    { id: 5, name: "Ms. Sana Malik", subject: "English", description: "Fosters cultural identity and moral values through language and tradition.", image: image5 },
    { id: 6, name: "Dr. Imran Shah", subject: "Physics", description: "Simplifies complex concepts with demonstrations and interactive learning.", image: image6 },
    { id: 7, name: "Dr. Ayesha Khan", subject: "Biology", description: "Believes in nurturing critical thinking through storytelling and creative expression.", image: image7 },
    { id: 8, name: "Miss Saima Naaz", subject: "Social Studies", description: "Makes math fun with real-life applications and problem-solving challenges.", image: image8 },
  ];

 
  const [faculty, setFaculty] = useState(() => {
    let saved = JSON.parse(localStorage.getItem("faculty") || "[]");

    
    saved = saved.map((f, i) => ({
      ...f,
      image: f.image && f.image !== "" ? f.image : initialFaculty[i]?.image || image1
    }));

    return saved.length > 0 ? saved : initialFaculty;
  });

  const [formFaculty, setFormFaculty] = useState({ id: null, name: "", subject: "", description: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    localStorage.setItem("faculty", JSON.stringify(faculty));
  }, [faculty]);

  const handleChange = (e) => {
    setFormFaculty({ ...formFaculty, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormFaculty({ ...formFaculty, image: event.target.result });
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAdd = () => {
    if (!formFaculty.name || !formFaculty.subject || !formFaculty.description) {
      alert("All fields are required!");
      return;
    }

    const newFaculty = {
      ...formFaculty,
      id: faculty.length ? Math.max(...faculty.map(f => f.id)) + 1 : 1,
      image: formFaculty.image || image1 // fallback
    };

    setFaculty([...faculty, newFaculty]);
    resetForm();
  };

  const handleEdit = (facultyItem) => {
    setFormFaculty(facultyItem);
    setIsEditing(true);
    setImagePreview(facultyItem.image);
  };

  const handleUpdate = () => {
    if (!formFaculty.name || !formFaculty.subject || !formFaculty.description) {
      alert("All fields are required!");
      return;
    }

    setFaculty(faculty.map(f => f.id === formFaculty.id ? { ...formFaculty, image: formFaculty.image || image1 } : f));
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setFaculty(faculty.filter(f => f.id !== id));
    }
  };

  const resetForm = () => {
    setFormFaculty({ id: null, name: "", subject: "", description: "", image: "" });
    setIsEditing(false);
    setImagePreview("");
    const img = document.getElementById("facultyImage");
    if (img) img.value = "";
  };

  return (
    <>
      <div className="container-fluid my-4" style={{ paddingTop: "80px" }}>
        <h2 className="text-dark">Faculty Management</h2>
        <p className="text-muted">Manage teacher information and details</p>

     
        <div className="card mt-3">
          <div className="card-header bg-dark text-white">
            {isEditing ? "Edit Faculty Member" : "Add New Faculty Member"}
          </div>
          <div className="card-body">

            <form onSubmit={(e) => { e.preventDefault(); isEditing ? handleUpdate() : handleAdd(); }}>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Name *</label>
                  <input type="text" className="form-control" name="name" value={formFaculty.name} onChange={handleChange} />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Subject *</label>
                  <input type="text" className="form-control" name="subject" value={formFaculty.subject} onChange={handleChange} />
                </div>
              </div>

              <label>Description *</label>
              <textarea className="form-control mb-3" name="description" rows="3" value={formFaculty.description} onChange={handleChange}></textarea>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Profile Image</label>
                  <input type="file" id="facultyImage" className="form-control" onChange={handleImageChange} accept="image/*" />
                </div>

                <div className="col-md-6">
                  {imagePreview && (
                    <img src={imagePreview} style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 5 }} />
                  )}
                </div>
              </div>

              <button className="btn btn-warning">{isEditing ? "Update Faculty" : "Add Faculty"}</button>
              <button type="button" onClick={resetForm} className="btn btn-secondary ms-2">Cancel</button>

            </form>

          </div>
        </div>

        
        <div className="card mt-4">
          <div className="card-body">
            <table className="table table-striped table-hover text-center">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {faculty.map((f) => (
                  <tr key={f.id}>
                    <td>{f.id}</td>
                    <td>{f.name}</td>
                    <td>{f.subject}</td>
                    <td>{f.description.substring(0, 40)}...</td>

                    <td>
                      <img
                        src={f.image || image1}
                        onError={(e) => (e.target.src = image1)}
                        style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 5 }}
                      />
                    </td>

                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(f)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(f.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {faculty.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center p-3">No faculty found</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      <AdmissionModal />
    </>
  );
};

export default FacultyManagement;
