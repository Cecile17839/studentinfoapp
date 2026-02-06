function Home() {
    return (
      <div style={styles.container}>
        <h1>Student Information Management System</h1>
  
        <div style={styles.card}>
          <h2>About This System</h2>
          <p>
            The Student Info App is designed to manage and display student
            information efficiently using modern web technologies such as React.
          </p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "40px",
      padding: "20px",
    },
    card: {
      backgroundColor: "#111",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "600px",
      borderRadius: "10px",
    },
  };
  
  export default Home;
  