import profile from './assets/profile.jpg'


function Card(){
    return(

        <div className="card">
            <img clasName="card-img"src={profile}  alt="picture"></img>
            <h2 className="card-title">fong</h2>
            <p className="card-text">i make youtube vides and play video games</p>
        </div>

    );
}
export default Card