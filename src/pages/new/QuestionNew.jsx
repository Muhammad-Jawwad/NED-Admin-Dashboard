import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { questionInputs } from "../../formSource";

const QuestionNew = ({ title }) => {
    // const [file, setFile] = useState("");
    const [inputValues, setInputValues] = useState({});
    let [token] = useState(localStorage.getItem("token"));

    const redirectToLogin = () => {
        window.location.href = "/notFound";
    };

    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });

        console.log("inputValues", inputValues);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("inputValues from submit", inputValues);

        const formData = {
            quiz_id: parseInt(inputValues.quizid),
            question: inputValues.question,
            option_1: inputValues.option1,
            option_2: inputValues.option2,
            option_3: inputValues.option3,
            option_4: inputValues.option4,
            correct_option: inputValues.correctoption,
            status: parseInt(inputValues.status),
        };

        try {
            // Send formData to the server using an HTTP request
            const response = await fetch("http://localhost:8000/api/admin/addquestion", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                if (data.code === 401 || data.code === 498) {
                    console.error("Unauthorized: Please log in");
                    window.location.href = "/notFound";
                }
            } 

            const data = await response.json();

            // Store formData in local storage
            localStorage.setItem("formData", JSON.stringify(formData));

            // Reset the form
            // setFile("");
            setInputValues({});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {!token && redirectToLogin()}
            {token && (
                <div className="new">
                    <Sidebar />
                    <div className="newContainer">
                        <Navbar />
                        <div className="top">
                            <h1>{title}</h1>
                        </div>
                        <div className="bottom">
                            {/* <div className="left">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </div> */}
                            <div className="right">
                                <form onSubmit={handleSubmit}>
                                    {/* <div className="formInput">
                                        <label htmlFor="file">
                                            Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                        </label>
                                        <input
                                            type="file"
                                            id="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            style={{ display: "none" }}
                                        />
                                    </div> */}
                                    {questionInputs.map((input) => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input
                                                type={input.type}
                                                placeholder={input.placeholder}
                                                name={input.label.toLowerCase().split(" ").join("")}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    ))}
                                    <div style={{ clear: "both" }} className="formSubmit">
                                        <button type="submit" style={{ float: "right" }}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
};

export default QuestionNew;