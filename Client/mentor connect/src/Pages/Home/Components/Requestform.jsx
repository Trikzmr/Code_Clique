import React, { useState } from "react";


const Requestform = () => {
  const [formData, setFormData] = useState({
    Skills: "",
    Message: "",
    PublicProfileLink: "",
    ProjectLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
       async function senduserdb (formData){
            try {
                const response=await fetch("http://localhost:3000/api/Addrequest",{
                   method:"POST",
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(formData),
                });
                const data= await response.json();
                if (response.ok){
                    console.log("request is succesfull");
                    alert("request is succesfull");
                }
                else{
                    console.log(data.message||"register failed");
                    alert("request is faild");
                }
                
            } catch (error) {
                console.log(error);
            }
        }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    senduserdb(formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Information</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="Skills" style={styles.label}>Skills</label>
          <input
            type="text"
            id="Skills"
            name="Skills"
            value={formData.Skills}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="Message" style={styles.label}>Message</label>
          <input
            type="text"
            id="Message"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="PublicProfileLink" style={styles.label}>Public Profile Link
          </label>
          <input
            type="text"
            id="PublicProfileLink"
            name="PublicProfileLink"
            value={formData.PublicProfileLink}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="ProjectLink" style={styles.label}>Project Link</label>
          <input
            type="tel"
            id="ProjectLink"
            name="ProjectLink"
            value={formData.ProjectLink}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};


export default Requestform