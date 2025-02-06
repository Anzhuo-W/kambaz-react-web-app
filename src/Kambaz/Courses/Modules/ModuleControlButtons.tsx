import GreenCheckmark from "./GreenCheckmark";
import { BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlusLg className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>);
}