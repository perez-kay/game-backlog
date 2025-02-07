import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <nav className="flex flex-col items-center text-center bg-zinc-600 p-2">
      <img src="/images/logo.png" alt="backlog logo" className="size-16" />
      <NavLink to="/" className={`[&.active]:text-violet-400`}>
        Homepage
      </NavLink>
      <NavLink to="/library" className={`[&.active]:text-violet-400`}>
        Library
      </NavLink>
      {/* <NavLink to="/details" className={`[&.active]:text-violet-400`}>
        Game Details
      </NavLink> */}
      <NavLink to="/search" className={`[&.active]:text-violet-400`}>
        Search
      </NavLink>
    </nav>
  );
}

export default SideNav;
