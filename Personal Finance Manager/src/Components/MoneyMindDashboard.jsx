import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiUser } from "react-icons/fi";

const data = [
  { name: "Jan", expense: 1000, income: 1500 },
  { name: "Feb", expense: 1400, income: 1700 },
  { name: "Mar", expense: 1200, income: 1600 },
  { name: "Apr", expense: 1800, income: 2000 },
  { name: "May", expense: 1500, income: 2100 },
  { name: "Jun", expense: 2000, income: 2200 },
];

export default function MoneyMindDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-200 p-5 flex flex-col space-y-4">
        <h1 className="text-xl font-semibold text-gray-700">💰 MoneyMind</h1>
        <nav className="space-y-3">
          {["Overview", "Transactions", "Budgets", "Reports", "Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block p-2 text-gray-700 hover:bg-gray-300 rounded-md"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="mt-auto text-center text-xs text-gray-600">
          © 2025 MoneyMind
          <div className="flex justify-center space-x-2 mt-1">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Support
            </a>
          </div>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Finance Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Add Account
            </button>
            <FiUser className="text-2xl text-gray-700" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Total Balance", amount: "$12,450.00" },
            { title: "Monthly Income", amount: "$4,200.00" },
            { title: "Monthly Expenses", amount: "$2,780.00" },
          ].map(({ title, amount }) => (
            <div
              key={title}
              className="bg-white p-5 shadow-md rounded-lg text-center"
            >
              <h3 className="text-gray-700 text-lg font-medium">{title}</h3>
              <p className="text-2xl font-semibold text-gray-900">{amount}</p>
            </div>
          ))}
        </div>

        {/* Charts & Transactions */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Spending Overview (Chart) */}
          <div className="bg-white p-5 shadow-md rounded-lg col-span-2">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Spending Overview
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="gray"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="red"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Recent Transactions
            </h3>
            <ul className="text-gray-700">
              {[
                {
                  name: "Grocery Store",
                  amount: "- $150.00",
                  color: "text-red-600",
                },
                {
                  name: "Electricity Bill",
                  amount: "- $90.00",
                  color: "text-red-600",
                },
                {
                  name: "Salary",
                  amount: "+ $3,200.00",
                  color: "text-green-600",
                },
              ].map(({ name, amount, color }) => (
                <li key={name} className="flex justify-between py-2 border-b">
                  <span>{name}</span>
                  <span className={`font-medium ${color}`}>{amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
