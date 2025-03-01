import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router"


function MessageList() {
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    const fetchAllMessages = () => {
        axios.get("http://localhost:3000/messages").then(res => {
            setMessages(res.data)
        })
    }

    useEffect(() => {
        fetchAllMessages()
    }, [])

    const deleteMessage = (id) => {
        axios.delete("http://localhost:3000/message/" + id,).then(res => {
            console.log(res.data)
            fetchAllMessages()
        })
    }

    const updateMessage = (id) => {
        navigate("/create-message/" + id)
    }
    return (<>
        <div className='w-100vh p-10 flex justify-end'>
            <NavLink to={'/create-message'} className='bg-yellow-200 p-3 m-5' >Create new Message</NavLink>
        </div>
        <div className="container">
            <div className="grid grid-cols-3 bg-pink-200 w-full mx-10 mt-10 p-5">
                <div className="text-2xl">
                    Timestamp
                </div>
                <div className="text-2xl">
                    Message itself
                </div>
                <div className="text-2xl">
                    delete, edit
                </div>
            </div>

            {messages.map((message, i) => {
                return (<div className="grid grid-cols-3 bg-pink-50 w-full mx-10 p-5" key={i}>
                    <div >
                        {message.date}
                    </div>
                    <div>
                        {message.message}
                    </div>
                    <div>
                        <button onClick={() => { deleteMessage(message._id) }} className="bg-red-700 p-3 px-5 text-white cursor-pointer">Delete</button>
                        <button onClick={() => { updateMessage(message._id, message.message) }} className="bg-green-700 p-3 px-5 text-white cursor-pointer">Edit</button>

                    </div>
                </div>)

            })}
        </div>
    </>);
}

export default MessageList;