import React, { useState } from "react";

const ComingSoonPage = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #000000, #111111)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#ff6600",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff751a")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6600")}
        title="Close"
      >
        ✕
      </button>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "600px",
          padding: "20px",
          animation: "fadeIn 1s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontWeight: "900",
            color: "#ff6600",
            marginBottom: "20px",
            textShadow: "0 0 12px rgba(255,102,0,0.6)",
          }}
        >
          🚗 We’re Coming Soon!
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#cccccc",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Yuva Ride is gearing up to redefine smart commuting.  
          Stay tuned — your ride-sharing experience is about to get better!
        </p>

        {/* Spinner */}
        <div
          style={{
            border: "4px solid rgba(255, 102, 0, 0.2)",
            borderTop: "4px solid #ff6600",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            margin: "0 auto 30px",
            animation: "spin 1s linear infinite",
          }}
        ></div>

        {/* Email Input */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px 16px",
              width: "250px",
              border: "1px solid #333",
              borderRadius: "6px 0 0 6px",
              outline: "none",
              backgroundColor: "#222",
              color: "white",
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "#ff6600",
              color: "white",
              border: "none",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff751a")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6600")}
          >
            Notify Me
          </button>
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoonPage;
