import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="pageTitle">Hello World!</div>
            <div className="infoPara">This is the style of website you will be able to make at the end of this CASE project!</div>
            <Link to="/about" className="pageLink">About this CASE activity</Link>
        </>
    )
}

export default Home;