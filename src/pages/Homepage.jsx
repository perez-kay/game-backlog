import GameBox from '../components/GameBox';
import GameNote from '../components/GameNote';
import Calendar from 'react-calendar';
import { useState } from 'react';

import 'react-calendar/dist/Calendar.css';

function Homepage() {
  const [dateSelected, setDateSelected] = useState(new Date());
  return (
    <>
      <h1 className="text-4xl font-bold  mb-3">Welcome back, User!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="grid grid-rows-2 col-span-1 lg:col-span-2">
          <div>
            <h2 className="text-2xl ">Recently Played</h2>
            <div className="flex gap-3">
              <GameBox imgPath={'/images/atv3.webp'} title={'atv3'} />
              <GameBox imgPath={'/images/ssx3.webp'} title={'ssx3'} />
              <GameBox
                imgPath={'/images/infinitynikki.webp'}
                title={'infinitynikki'}
              />
              <GameBox imgPath={'/images/forza.webp'} title={'forza'} />
            </div>
          </div>
          <div>
            <h2>Calendar</h2>
            <Calendar
              onClickDay={(value) => setDateSelected(value)}
              maxDate={new Date()}
            />
          </div>
        </div>
        <div className="border-l-2 border-zinc-500 ps-2">
          <h2 className="text-2xl font-bold">
            Notes for{' '}
            {dateSelected.toLocaleString('default', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </h2>
          <GameNote status="playing" title="Infinity Nikki" />
          <GameNote status="backlogged" title="Project DIVA: Mega Mix" />
          <GameNote status="abandoned" title="Super Paper Mario" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
