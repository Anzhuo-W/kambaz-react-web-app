import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

export type Assignment = {
  _id: string,
  title: string,
  course: string,
  module: string,
  available: string,
  available_until: string,
  due: string,
  points: string,
  description: string
}

const initialState = {
  assignments: assignments
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        module: assignment.module,
        available: assignment.available,
        available_until: assignment.available_until,
        due: assignment.due,
        points: assignment.points,
        description: assignment.description
      };
      state.assignments = [...state.assignments, newAssignment] as Assignment[];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: Assignment) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignment._id ? assignment : a
      ) as Assignment[];
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as Assignment[];
    }
  }
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;