const NavBar = () => {
    return ( 
        <div><nav className="navbar">
        Lyric-Find
        </nav> 
        <div className="info">
        <p > If you're trying this site for the first time 
        chances are there might be a 403 
        error from the API (check console), click on {" "}
        <a style={{color:"rgb(178, 198, 235)"}} href="https://cors-anywhere.herokuapp.com/corsdemo">
        Request temporary access</a>  to continue
          </p>
          </div>
          </div>
        );
}
 
export default NavBar;