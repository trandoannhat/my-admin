export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full border p-2 mb-4 rounded"
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
