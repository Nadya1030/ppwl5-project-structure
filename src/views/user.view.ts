
import type { UserModel } from "../models/user.model";

export const userView = (users: UserModel[]) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Management</title>
  <link href="css/style.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen p-10">

  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">
      User Management (Clean Structure)
    </h1>

    <form method="POST" action="/create" class="mb-6 flex gap-2">
      <input name="name" placeholder="Name" class="border p-2 rounded w-full" required/>
      <input name="role" placeholder="Role" class="border p-2 rounded w-full" required/>
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded transition">
        Add
      </button>
    </form>

    <div class="grid gap-4">
      ${users.map(user => `
        <div class="bg-white shadow rounded p-4 flex justify-between items-center">
          <div>
            <p class="font-semibold text-gray-800">${user.displayName}</p>
          </div>
          <div class="flex gap-2">
            <form method="POST" action="/delete/${user.id}">
              <button type="submit" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition">
                Delete
              </button>
            </form>
          </div>
        </div>
      `).join("")}
    </div>
    
    ${users.length === 0 ? '<p class="text-gray-500 text-center italic">No users found.</p>' : ''}
  </div>

</body>
</html>
`;