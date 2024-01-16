export default function TableData({ children, customStyles }) {
  return (
    <td className={`p-5 text-sm md:text-xl ` + customStyles}>{children}</td>
  );
}
