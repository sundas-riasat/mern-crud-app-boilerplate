import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router";

function CreateMessage() {
    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    const params = useParams()
    const id = params.id
    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        if (id) {
            updateMessage(e);
            return
        }
        e.preventDefault()
        axios.post("http://localhost:3000/message", {
            message: message
        }).then(m => {
            toast.success("Message Sent")
        })
        navigate('/')
    }

    const updateMessage = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/message/" + id, {
            message: message
        }).then(m => {
            toast.success("Message updated")
            // navigate('/')
        })
        navigate('/')
    }

    useEffect(() => {
        (async () => {
            if (id) {
                const mes = await axios.get("http://localhost:3000/message/" + id)
                setMessage(mes.data.message.message);
                console.log(mes.data.message.message)
            }
        })()
    }, [id])
    return (<>
        <div className="container w-full p-6 m-6 ">
            <h2 className="text-4xl mb-5">Create A New Message</h2>
            <form>
                <input className=" w-3xl p-3 m-4 bg-white text-black border border-gray-300" type="textarea" name="message" onChange={handleChange} value={message} />
                <button className="bg-blue-100 text-black p-3 m-4" onClick={sendMessage}> Submit </button>
            </form>
        </div>
    </>);
}

export default CreateMessage;