import ModulesControls from "./ModulesControls.tsx";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons.tsx";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import { useParams } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { setModules, addModule, deleteModule, editModule, updateModule } from "./reducer.ts";
import { useSelector, useDispatch } from "react-redux";
import { KambazState } from "../../store.ts";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export type Module = {
  _id: string,
  name: string,
  course: string,
  lessons: Lesson[],
  editing: boolean
}

export type Lesson = {
  _id: string,
  name: string,
  description: string,
  module: string
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: KambazState) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { _id: "0", name: moduleName, course: cid, lessons: [], editing: false };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: Module) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div>
      {isFaculty && (
        <>
          <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                           addModule={createModuleForCourse} />
          <br /><br /><br />
        </>
      )}
      {isFaculty || (<br />)}
      <ul className="list-group rounded-0" id="wd-modules">
        {modules
          .map((module) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
                style={{ width: isFaculty ? "680px" : "820px" }}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {isFaculty && (
                  <>
                    {module.editing && (
                      <FormControl className="w-50 d-inline-block"
                                   onChange={(e) => dispatch(
                                     updateModule({ ...module, name: e.target.value })
                                   )}
                                   onKeyDown={(e) => {
                                     if (e.key === "Enter") {
                                       saveModule({ ...module, editing: false });
                                     }
                                   }}
                                   defaultValue={module.name} />
                    )}
                    <ModuleControlButtons moduleId={module._id}
                                          deleteModule={(moduleId) => removeModule(moduleId)}
                                          editModule={(moduleId) => dispatch(editModule(moduleId))} />
                  </>)}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
