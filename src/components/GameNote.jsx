import TitlePill from './TitlePill';
function GameNote({ status, title }) {
  const timestamp = new Date();
  const timestampOptions = {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
  };

  return (
    <div className="bg-gray-200 text-black rounded-md p-3 mb-2">
      <div className="flex justify-between items-center pb-2">
        <span>{timestamp.toLocaleString('en-US', timestampOptions)}</span>
        <TitlePill status={status} title={title} />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla placeat
        voluptates corporis omnis inventore et, libero, autem error vitae
        dolorem temporibus cupiditate praesentium in unde, mollitia explicabo
        maxime possimus debitis?
      </p>
    </div>
  );
}

export default GameNote;
