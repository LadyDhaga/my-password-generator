import React, {useState} from "react";
import "./App.css";

function App() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [clipText, setClipText] = useState("Copy")

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    let copyToClip = () => {
        if (password.passlength) {
            navigator.clipboard.writeText(password.passcode)
            setClipText("Copied!")
        }
    }

    const [password, setPassword] = useState({
        passcode: "",
        passlength: 0,
        upper: false,
        lower: false,
        nums: false,
        special: false
    })

    const handleChange = (e) => {
        setClipText("Copy")
        const {name, value, type, checked} = e.target
        setPassword(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
    }


    let generatePassword = () => {

        setClipText("Copy")
        setPassword(prevState => ({
            ...prevState,
            passcode: ''
        }))

        let passcode2 = ''
        let charset = ''
        if (password.upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (password.nums) charset += '123456789'
        if (password.lower) charset += 'abcdefghijklmnopqrstuvwxyz'
        if (password.special) charset += '~!@#$%^&*()_+<>?{}[],./'

        for (let i = 0; i < password.passlength; i++) {
            const rNum = Math.floor(Math.random() * charset.length)
            passcode2 += charset[rNum];
        }
        setPassword(prevState => ({
            ...prevState,
            passcode: passcode2
        }))

    }

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
                            minHeight: "50vh",
                            minWidth: "50vb",
                            padding: "15px 30px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}
                    >
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <input placeholder={password.passcode} value={password.passcode}
                                   style={{
                                       cursor: "not-allowed",
                                       minWidth: "70%",
                                       padding: "5px",
                                       borderRadius: "5px",
                                       borderStyle: "border-box"
                                   }} readOnly/>
                            <button onClick={copyToClip}
                                    style={{
                                        marginLeft: "auto",
                                        borderStyle: "none",
                                        backgroundColor: "#41B3A3",
                                        color: "white",
                                        fontWeight: "500",
                                        minWidth: "25%",
                                        borderRadius: "10px",
                                        padding: "5px"
                                    }}>{clipText}
                            </button>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <label>select length</label>
                            <input type="range"
                                   value={password.passlength}
                                   min={1}
                                   max={20}
                                   name="passlength"
                                   onChange={handleChange}
                                   style={{
                                       marker: "none",
                                       color: "black"
                                   }}/>
                            <span style={{fontSize: "1.1rem", fontWeight: "700px"}}>{password.passlength}</span>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <label> include uppercases?</label>
                            <input type="checkbox" name="upper" checked={password.upper} onClick={handleChange}
                                   style={{}}></input>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <label> include lowercases?</label>
                            <input type="checkbox" name="lower" checked={password.lower} onClick={handleChange}
                                   style={{}}></input>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <label style={{}}>
                                include numbers?
                            </label>
                            <input type="checkbox" name="nums" checked={password.nums} onClick={handleChange}
                                   style={{}}></input>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <label> include special characters?</label>
                            <input type="checkbox" name="special" checked={password.special} onClick={handleChange}
                                   style={{}}></input>
                        </div>
                        <button onClick={generatePassword} style={{
                            marginLeft: "auto",
                            borderStyle: "none",
                            backgroundColor: "#41B3A3",
                            color: "white",
                            fontWeight: "500",
                            minWidth: "100%",
                            padding: "10px 0 ",
                            fontSize: "1.2rem",
                            borderRadius: "10px",
                        }}>generate password
                        </button>
                    </div>
                </div>
                <footer
                    style={{
                        minHeight: "10vh",
                        background: "#C38D9B",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "1.5rem",
                        fontWeight: "500",
                        color: "white"
                    }}> ©️Navdeep Jajoria™️
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
