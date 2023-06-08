function UserTable({ data }) {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              UserName
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              PrimaryEmail
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Type
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              CreatedData
            </th>
            <th className=""></th>
            <th className=""></th>
            <th className=""></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((user) => (
            <tr key={user._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {user.userName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.primaryEmail}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.userType}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.createdAt}
              </td>
              <td className="whitespace-nowrap">
                <a
                  href="#"
                  className="inline-block rounded bg-primary px-2 py-2 text-xs font-medium text-white hover:bg-gray-700"
                >
                  View
                </a>
              </td>

              <td className="whitespace-nowrap">
                <a
                  href="#"
                  className="inline-block rounded bg-gray-900 px-2 py-2 text-xs font-medium text-white hover:bg-gray-700"
                >
                  Edit
                </a>
              </td>

              <td className="whitespace-nowrap">
                <a
                  href="#"
                  className="inline-block rounded bg-red-600 px-2 py-2 text-xs font-medium text-white hover:bg-gray-700"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
