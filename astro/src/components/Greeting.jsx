import {createSignal} from 'solid-js'

export default function Greeting({messages}) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
    const [greeting, setGreeting] = createSignal(randomMessage())
    const onclick = () => {
        console.log('click mamème')
        setGreeting(randomMessage())
    }

    return (
        <div>
            <h3>{greeting()}! Thank you for visiting!</h3>
            <button onClick={onclick}>New Greeting</button>
        </div>
    )
}