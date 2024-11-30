"use client";

import prisma from "../../../../prisma/prisma";
import { useEffect, useState } from "react";
import Header from '@/components/Header'
import Register from '@/components/Register'
import SidebarAdmin from '@/components/SidebarAdmin'

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <>
    <Header/>
    <div className="flex">
    <SidebarAdmin/>
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-6"> Dayee's Table</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Full Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.fullName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </>
  );
}