import data from "../../data.json";
import Table from "./table/Table";
import TableBody from "./table/TableBody";
import TableData from "./table/TableData";
import TableHead from "./table/TableHead";
import TableHeader from "./table/TableHeader";
import TableRow from "./table/TableRow";

export default function StudentTable() {
  const getListOfStudents = (className) => {
    return data.students
      .filter((item) => item.class === className)
      .map((item) => {
        return (
          <TableRow key={item.id}>
            <TableData>{item.id}</TableData>
            <TableData>
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={item.avatar}
                  width="32"
                  height="32"
                  alt={item.name}
                />
                <span className="whitespace-nowrap">{item.name}</span>
              </div>
            </TableData>
            <TableData customStyles="text-center">{item.scores}</TableData>
            <TableData customStyles="text-center">{item.percentage}%</TableData>
          </TableRow>
        );
      });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead customStyles="uppercase text-left md:min-w-[110px]">
            ID
          </TableHead>
          <TableHead customStyles="text-left">Name</TableHead>
          <TableHead>Scores</TableHead>
          <TableHead>Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class One
          </td>
        </tr>
        {getListOfStudents("one")}
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class Two
          </td>
        </tr>
        {getListOfStudents("two")}
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            Class Three
          </td>
        </tr>
        {getListOfStudents("three")}
      </TableBody>
    </Table>
  );
}
