/* eslint-disable @typescript-eslint/no-explicit-any */
export function UserDetails({ user }: any) {
  return (
    <div className="border rounded p-2 mb-2">
      <h2 className="font-bold">{user.name}</h2>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
    </div>
  );
}
