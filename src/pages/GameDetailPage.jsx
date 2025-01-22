import { useParams } from 'react-router-dom';

function GameDetailPage() {
  const { title } = useParams();
  return <div>Game Detail Page for game: {title} </div>;
}

export default GameDetailPage;
