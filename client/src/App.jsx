import './App.css'
import NoteComponent from './component/notes/NoteComponent';
import TimerComponent from './component/TimerComponent';
import UserLoginComponent from './component/user/UserLoginComponent';

function App() {

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <h1 className=''>Welcome to Notes</h1>
      <UserLoginComponent />
    </div>
  )
}

export default App
