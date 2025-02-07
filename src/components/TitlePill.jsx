function TitlePill({ status, title }) {
  let statusColors = {};
  switch (status) {
    case 'playing':
      statusColors = {
        background: 'bg-emerald-100',
        textColor: 'text-emerald-800',
        circleColor: 'bg-emerald-400',
      };
      break;
    case 'backlogged':
      statusColors = {
        background: 'bg-violet-100',
        textColor: 'text-violet-800',
        circleColor: 'bg-violet-400',
      };
      break;
    case 'abandoned':
      statusColors = {
        background: 'bg-slate-300',
        textColor: 'text-slate-900',
        circleColor: 'bg-slate-500',
      };
      break;
    default:
      statusColors = {};
  }

  return (
    <div
      className={`${statusColors.background} ${statusColors.text} rounded-full px-3 py-2`}
    >
      <div
        className={` ${statusColors.circleColor} rounded-full size-3 inline-block me-2`}
      ></div>
      {title}
    </div>
  );
}

export default TitlePill;
