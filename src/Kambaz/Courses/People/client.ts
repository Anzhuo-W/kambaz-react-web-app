import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchUserEnrollments = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
  return data;
};

export const fetchCourseEnrollments = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/enrollments`);
  return data;
};

export const enrollUserInCourse = async (enrollment: { user: string; course: string }) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, enrollment);
  return data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const { data: enrollment } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${userId}/${courseId}`);

  if (enrollment) {
    const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return data;
  }
  throw new Error("Enrollment not found");
};

export const findEnrollment = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return data;
};