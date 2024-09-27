const Banner = () => (
    <section className="banner" data-scroll-index='0'>
        <div className="banner-overlay">
            <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                <div className="banner-text">
                    <h2 className="white">Easy Learning With Practice Platform </h2>
                    <h6 className="white">Scotik provide to easy upload learning content like Videos, youtube video link , Pdf Notes, {/*Sample project Attend Test and Chat or Calling with Tutor and solve doubts */}.</h6>
                    <p className="banner-text white">Scotik also analyse your learning. Time Spend and Progress </p>
                    <ul>
                    <li><a href="#"><img src="images/appstore.png" className="wow fadeInUp" data-wow-delay="0.4s"/></a></li>
                    <li><a href="#"><img src="images/playstore.png" className="wow fadeInUp" data-wow-delay="0.7s"/></a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4 col-sm-12"> <img src="images/iphone-screen.png" className="img-fluid wow fadeInUp"/> </div>
            </div>
            </div>
        </div>
        <span className="svg-wave"> <img className="svg-hero" src="images/applight-wave.svg" /> </span> 
    </section>
)

export default Banner;