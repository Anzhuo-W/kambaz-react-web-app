import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../Database";

export type Course = {
  _id: string,
  name: string,
  number: string,
  image: string,
  startDate: string,
  endDate: string,
  description: string,
};

const initialState = {
  courses: courses
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const id = uuidv4();
      const newCourse: Course = {
        _id: id,
        name: course.name,
        number: id,
        image: course.image,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description
      };
      state.courses = [...state.courses, newCourse] as Course[];
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: Course) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: Course) =>
        c._id === course._id ? course : c
      ) as Course[];
    }
  }
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
