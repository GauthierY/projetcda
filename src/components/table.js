import { BiEdit, BiTrashAlt } from "react-icons/bi";
//import data from "../database/data.json";

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Nom</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salaire</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Date de naissance</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {/* {data.map((obj, i) => (
          <Tr {...obj} key={i} />
       ))}*/}
      </tbody>
    </table>
  );
}

function Tr(id, nom, photo, email, salaire, date, status) {
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={photo || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">
          {nom || "Inconnu"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Inconnu"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salaire || "Inconnu"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Inconnu"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-none">
            {/*{{status||"Inconnu"}}*/}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
