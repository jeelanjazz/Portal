import './Home.css'
export default function Home(){
    const handleclick = () => {
        console.log('hello');
    }

    return (
        <div className="home">
            <h1>*****Sensiple Employee Portal*****</h1>
            <button onClick={handleclick}>Check In</button>
            <button onClick={handleclick}>Check Out</button>
            <button onClick={handleclick}>Details</button>
        </div>
    )
}