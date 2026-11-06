function UserCard({ name }: { name: string }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
    </div>
  );
}

export default UserCard;
