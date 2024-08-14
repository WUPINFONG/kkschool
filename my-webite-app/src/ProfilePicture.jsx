function ProfilePicture(){
const imageUrl='./src/assets/profile.jpg'
const hamdleClick=(e) => e.target.style.display="none";


return(
    <img onClick={e=>hamdleClick(e) }src={imageUrl}></img>
);
}
export default ProfilePicture