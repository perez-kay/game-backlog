function SearchPage() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search for a game" />
      </div>
      <div className="grid grid-cols-2"></div>
    </div>
  );
}

function Game({ game }) {
  return (
    <li>
      <img src="" alt="" />
    </li>
  );
}

export default SearchPage;
