import { Link } from 'react-router-dom';

function GameBox({ imgPath, title }) {
  return (
    <>
      <Link to={`/details/${title}`}>
        <img src={imgPath} alt={title} />
      </Link>
    </>
  );
}

export default GameBox;
