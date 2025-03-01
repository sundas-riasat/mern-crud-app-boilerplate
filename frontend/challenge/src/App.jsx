import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'
import { Routes, Route } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <div className='text-center'>
        <Routes>
          <Route path='/' element={<MessageList />} > </Route>
          <Route path='/create-message/:id?' element={<CreateMessage />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
