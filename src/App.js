import React, { useState } from "react";
import "./App.css";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#41B3A3",
        }}
      >
        <nav
          style={{
            backgroundColor: "#C38D9B",
            minHeight: "10vh",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <h2
              style={{
                padding: "15px",
                color: "white",
              }}
            >
              New Password Generator
            </h2>
          </a>
          <div
            style={{
              position: "relative",
              marginRight: "15px",
            }}
          >
            <button
              onClick={toggleDropdown}
              style={{
                backgroundColor: "#41B3A3",
                border: "none",
                cursor: "pointer",
                color: "white",
                borderRadius: "20px",
                padding: " 10px 20px",
                marginInlineEnd: "20px",
                fontSize: "1.25rem",
              }}
            >
              Dropdown
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                  marginRight: "20px",
                  minWidth: "85%",
                  borderRadius: "20px",
                  background: "#C38D9B",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    padding: "10px 0 0 10px ",
                  }}
                >
                  <li>
                    <a
                      href="#action/1"
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Action 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#action/2"
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Action 2
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <input placeholder="pass" />
              <button>copy!</button>
            </div>
            <div>
              <label>select length</label>
              <input type="range" />
            </div>
            <div>
              <label> include uppercases?</label>
              <input type="checkbox" style={{}}></input>
            </div>
            <div>
              <label> include lowercases?</label>
              <input type="checkbox" style={{}}></input>
            </div>
            <div>
              <label style={{ marginInlineEnd: "auto" }}>
                {" "}
                include numbers?
              </label>
              <input type="checkbox" style={{}}></input>
            </div>
            <div>
              <label> include special characters?</label>
              <input type="checkbox" style={{}}></input>
            </div>
            <button>generate password</button>
          </div>
        </div>
        <footer
          style={{
            minHeight: "10vh",
            background: "#C38D9B",
          }}
        ></footer>
      </div>
    </>
  );
}

export default App;
