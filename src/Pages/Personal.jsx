import React from "react";

function ProfilePage() {
  return (
    <div style={styles.container}>
      
      {/* Left Panel */}
      <div style={styles.left}>
        <img
  src="/profile.jpg"
  alt="PROFILE"
  style={styles.image}
/>

        <p style={styles.profileText}>Asish Joy</p>
      </div>

      {/* Right Panel */}
      <div style={styles.right}>
        <div style={styles.smallBox}>ASISH JOY</div>
        <div style={styles.smallBox}>MERN Stack Developer</div>

        <div style={styles.aboutBox}>
          <b>About</b>
          <p>
            Passionate developer focused on building responsive and modern web
            applications using React, Node.js, and MongoDB.
          </p>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "10vh",
    backgroundColor: "#62a09fff",
    padding: "40px",
  },

  /* Left */
  left: {
    width: "30%",
    backgroundColor: "#080808ff",
    color: "white",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  profileText: {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.7,
  },

  /* Right */
  right: {
    width: "70%",
    marginLeft: "30px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  smallBox: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "12px 15px",
    fontSize: "18px",
  },

  aboutBox: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    minHeight: "120px",
    fontSize: "16px",
  },
};

export default ProfilePage;