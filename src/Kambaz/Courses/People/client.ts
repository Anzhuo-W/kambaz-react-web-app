import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchUserEnrollments = async (userId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/users/${userId}/enrollments`);
  return data;
};

export const fetchCourseEnrollments = async (courseId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/courses/${courseId}/enrollments`);
  return data;
};

export const enrollUserInCourse = async (enrollment: { user: string; course: string }) => {
  const { data } = await axios.post(`${ENROLLMENTS_API}`, enrollment);
  return data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const { data: enrollment } = await axios.get(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  
  if (enrollment) {
    const { data } = await axios.delete(`${ENROLLMENTS_API}/${enrollment._id}`);
    return data;
  }
  throw new Error("Enrollment not found");
};

export const findEnrollment = async (userId: string, courseId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return data;
};