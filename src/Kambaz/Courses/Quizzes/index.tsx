import QuizMenu from "./Menu.tsx";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Quizzes() {
  const { cid } = useParams();
  const quizzes = db.quizzes.filter((quiz) => quiz.course === cid);

  return (
    <div id="wd-quizzes">
      <QuizMenu />
      <ul className="list-group rounded-0" id="wd-modules">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            className="wd-title p-3 ps-2 bg-secondary"
            style={{ width: "830px" }}
          >
            <div>
              <IoMdArrowDropdown className="me-2 fs-3" /> QUIZZES
            </div>
          </div>
          {quizzes.length > 0 && (
            <ul
              className="wd-lessons list-group rounded-0"
              id="wd-assignment-list"
            >
              {quizzes.map((quiz) => (
                <li
                  key={quiz._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <Link
                    to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                    className="wd-assignment-link d-flex justify-content-between align-items-center text-start"
                  >
                    <div className="d-flex align-items-center">
                      <HiOutlineRocketLaunch
                        className="me-2 fs-3"
                        style={{ marginLeft: "18px" }}
                      />
                      <div
                        className="quiz-details"
                        style={{ marginLeft: "16px" }}
                      >
                       {/*  <b>{quiz.title}</b>
                        <br />
                        {new Date().getTime() >
                          new Date(quiz.availableUntil).getTime() && (
                          <b>Closed</b>
                        )}
                        {new Date(quiz.availableFrom).getTime() <
                          new Date().getTime() &&
                          new Date().getTime() <
                            new Date(quiz.availableUntil).getTime() && (
                            <b>Available</b>
                          )}{" "}
                        {new Date().getTime() <
                          new Date(quiz.availableFrom).getTime() && (
                          <>
                            <b>Not available until</b> {quiz.availableFrom}
                          </>
                        )}{" "}
                        | <b>Due</b> {new Date(quiz.due).toDateString()} |{" "}
                        {quiz.points} pts | {quiz.questions.length} questions |{" "}
                        <b>Score:</b> 100 */}
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
