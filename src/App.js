import './App.css';
import SocketIO from 'socket.io-client'
import {useEffect, useState} from "react";
const socket = SocketIO("http://localhost:3001", {
    transports: ['websocket', 'polling', 'flashsocket']
})
function App() {
    const [text, setText] = useState('')
    const  [data, setData] = useState([])
    useEffect(() => {
        socket.on('push_data', (res) => {
            data.push(res.url)
            setData([...data])
        })
    }, []);
    const sendData = () => {
        if (text != '')
        {
            socket.emit('send_data', {
                url: text,
            })
            data.push(text)
            setData([...data])
            setText('')
        }
        else
            alert('Lütfen Link Giriniz.')
    }
  return (
    <div >
        <div style={{ marginTop:10, justifyContent: 'center', display:'flex', alignItems:'center' }}>
            <input style={{ padding:10, width:300, borderRadius: 5, border: '1px solid #a5a5a5' }} type="text" onChange={(event) => setText(event.target.value)} value={text} placeholder="Paylaşmak istediğiniz link"/>
            <button style={{ padding: '7px 15px', border: '1px solid #ddd', borderRadius: 5, marginLeft: 5 }} onClick={sendData}>Veriyi Gönder</button>
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
        <div className="link-container">
            { data.map((item) => (
                <div className="link-item">
                    <a href={item} target="_blank">{item}</a>
                </div>
            ))}
        </div>
    </div>
  );
}

export default App;
