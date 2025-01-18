import { NextApiRequest, NextApiResponse } from "next";
import { fetchUsersPagination, fetchUsers, getUserRoles } from "../../../supabase/database";
import { User, Role } from "../../models/dataModels";

// Define the API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Ensure JWT_SECRET is defined
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const { page, limit } = req.query;

    // Fetch roles
    const roles: Role[] = await getUserRoles();
    if (!roles || roles.length === 0) {
      return res.status(500).json({ error: "Failed to fetch roles" });
    }

    if (!page && !limit) {
      // Fetch all users if no pagination is provided
      const users: User[] = await fetchUsers();

      // Map roles to users
      const enrichedUsers = users.map((user) => {
        const role = roles.find((x) => x.id === user.role_id);
        return {
          ...user,
          roleName: role?.name || "Unknown",
          roleDescription: role?.description || null,
        };
      });

      return res.status(200).json({ users: enrichedUsers });
    }

    // Parse query parameters for pagination
    const pageNumber = parseInt(page as string, 10) || 1; // Default to 1
    const pageSize = parseInt(limit as string, 10) || 10; // Default to 10

    if (isNaN(pageNumber) || isNaN(pageSize) || pageNumber <= 0 || pageSize <= 0) {
      return res.status(400).json({ error: "Invalid pagination parameters" });
    }

    // Fetch paginated users
    const offset = (pageNumber - 1) * pageSize;
    const users: User[] = await fetchUsersPagination(offset, pageSize);

    // Map roles to users
    const enrichedUsers = users.map((user) => {
      const role = roles.find((role) => role.id === user.role_id);
      return {
        ...user,
        roleName: role?.name || "Unknown",
        roleDescription: role?.description || null,
      };
    });

    return res.status(200).json({
      users: enrichedUsers,
      page: pageNumber,
      limit: pageSize,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
}
