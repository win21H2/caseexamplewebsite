import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <Link to="/" className="pageLink">Home</Link>
            <div className="infoTitle">What is this CASE activity?</div>
            <div className="infoPara">This CASE activity is focusing mainly on building and deploying a website using ReactJS and SASS (and Netlify for deploying). For those who were in the website buidling CASE last summer term, the teahcing style will be similar!</div>
            <div className="infoTitle">What will students do in this CASE activity?</div>
            <div className="infoPara">Students will learn how ReactJS works, how page navigation works, how to deploy a website to Netlify (a website hosting service), learn what SASS/SCSS is and how to use it (and the different functions compared to vanilla CSS), and finally, how to create a website using ReactJS.<br/><br/>Over the duration of the CASE activity, students will cerate a ReactJS app, style it with SASS/SCSS, add in navigation links (or buttons if you have previous knowledge of ReactJS).</div>
        </>
    )
}

export default About