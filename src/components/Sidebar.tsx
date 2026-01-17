export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
      <ul className="space-y-2">
        <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
          Dashboard
        </li>
      </ul>
    </aside>
  );
}
