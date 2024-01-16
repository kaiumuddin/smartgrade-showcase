export default function TableHead({ children, customStyles }) {
  return (
    <th className={`p-5 text-sm md:text-xl font-semibold ` + customStyles}>
      {children}
    </th>
  );
}
