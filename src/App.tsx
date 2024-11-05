
import './App.css'
import EventList from './components/event/EventList'
import Header from './components/page/Header'
import EventDetail from './components/event/EventDetail'
import React from 'react'
import Footer from './components/page/Footer'

const App: React.FC = () => {
  const [activeEventId, setActiveEventId] = React.useState<string>('1');

  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <Header />
      <div className='w-full h-full px-8 py-8 flex flex-row 2xl:max-w-[75vw]'>
        <div className='w-1/4 2xl:w-1/6 px-8 border-r border-karcis-blue flex flex-col gap-4'>
          <EventList setActiveEventId={setActiveEventId} />
        </div>
        <div className='flex flex-col w-3/4 2xl:w-5/6 px-8 gap-8'>
          <EventDetail activeEventId={activeEventId} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
