import GameBox from '../components/GameBox';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function Homepage() {
  const [dateSelected, setDateSelected] = useState(new Date());
  return (
    <>
      <h1>Homepage</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-rows-2 col-span-2">
          <div>
            <h2>Recently Played</h2>
            <div className="flex justify-between gap-4">
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
        <div>
          <h2>
            Notes for{' '}
            {dateSelected.toLocaleString('default', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Homepage;
