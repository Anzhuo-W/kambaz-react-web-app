import axios from "axios";

type Module = {
  _id: string,
  name: string,
  course: string,
  lessons: Lesson[],
  editing: boolean
}

type Lesson = {
  _id: string,
  name: string,
  description: string,
  module: string
}

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: Module) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};
