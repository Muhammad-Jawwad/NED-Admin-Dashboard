import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import NotFoundPage from "./pages/notFound/NotFound";

import List from "./pages/list/List";

import Single from "./pages/single/Single";

import New from "./pages/new/New";
import Update from "./components/update/Update";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { categoryInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  localStorage.setItem("selectedOption", localStorage.getItem("type"));
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >

            <Route index element={<Login />} />
            {/* <Route path="quizLogin" element={<TestLogin />} /> */}
            <Route path="home" element={<Home />} />

            {/* <Route path="user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserSingle />} />
            </Route> */}

            <Route path="categories">
              <Route index element={<List />} />
              <Route path=":categoryId" element={<Single />} />
              <Route path="update/:categoryId" element={<Update inputs={categoryInputs} title="Update Category" />} />
              <Route
                path="new"
                element={<New inputs={categoryInputs} title="Add New Category" />}
              />
            </Route>
{/* 
            <Route path="quizList">
              <Route index element={<QuizList />} />
              <Route path=":quizId" element={<QuizSingle />} />
              <Route path="update/:quizId" element={<QuizUpdate inputs={quizInputs} title="Update Quiz" />} />
              <Route
                path="new"
                element={<QuizNew inputs={quizInputs} title="Add New Quiz" />}
              />
            </Route>

            <Route path="question">
              <Route index element={<QuestionList />} />
              <Route path=":questionId" element={<QuestionSingle />} />
              <Route path="update/:questionId" element={<QuestionUpdate inputs={questionInputs} title="Update Question" />} />
              <Route
                path="new"
                element={<QuestionNew inputs={quizInputs} title="Add New Question" />}
              />
            </Route> */}

            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>

            <Route path="notFound">
              <Route index element={<NotFoundPage />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;