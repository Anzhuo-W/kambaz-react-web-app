import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

const initialState = {
  enrollments: enrollments
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: { currentUser, course } }) => {
      const newEnrollment: Enrollment = {
        _id: uuidv4(),
        user: currentUser._id,
        course: course._id
      };
      state.enrollments = [...state.enrollments, newEnrollment] as Enrollment[];
    },
    unenrollFromCourse: (state, { payload: { currentUser, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === currentUser._id && e.course === course._id)
      );
    }
  }
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
