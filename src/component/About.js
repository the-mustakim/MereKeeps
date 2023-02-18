import AboutImg1 from "../images/AboutImg1.jpg";
import clock from "../images/clock.png";
import location from "../images/location.png";
import phone from "../images/phone.png";

export default function About() {
  return (
    <>
      <div>
        <div className="row m-auto">
          <div className="col-md-6 mb-5">
            <img className="img-fluid" src={AboutImg1} alt="AboutImg1" style={{ width: 800 }} />
          </div>
          <div className="col-md-6 mb-5">
            <h1>
              <b>About Us</b>
            </h1>
            <h5>MereKeeps: Organize Your Notes, Ideas & Memories</h5>
            <p className="text-justify">
              MereKeeps is a simple and intuitive platform that helps people
              keep track of their personal notes, ideas and memories. We believe
              that everyone has valuable information and thoughts that should be
              preserved for future reference. That's why we created MereKeeps.
            </p>
              <p className="text-justify">
              With MereKeeps, you can easily store and organize your notes in
              one secure place. Whether you want to jot down your daily to-do
              list, save important reminders, or store your most precious
              memories, MereKeeps makes it easy to keep everything organized and
              accessible. 
              </p>
              <p className="text-justify">
              Our mission is to provide a user-friendly and reliable
              platform that helps people manage their personal information and
              memories with ease. We believe that technology should serve
              people, not the other way around, and we are committed to making
              MereKeeps a tool that is both accessible and helpful to everyone.
              We are a team of passionate individuals who are dedicated to
              helping people make the most of their personal information.
              </p>
            <p className="text-justify">
              So
              why wait? Sign up for MereKeeps today and start keeping your
              personal notes, ideas and memories safe and organized. We are
              confident that you'll love using our platform, and we look forward
              to serving you in the future.
            </p>
            <i className="d-flex justify-content-around">--- MereKeeps</i>
          </div>
        </div>
        {/* <div
          className="p-3 mb-2 bg-dark text-white my-4 text-center mx-auto"
          style={{ height: 50, borderRadius: 20, width: 300 }}
        >
          <b>Contact Us</b>
        </div>
        <div className="row">
          <div
            className="col p-3 mb-2 text-white mx-2 text-center"
            style={{ height: 150, borderRadius: 20,backgroundColor:"#3BB9FF" }}
          >
            <img
              className="mx-2"
              src={phone}
              alt="phone"
              style={{ height: 25, width: 25, marginBottom: 10 }}
            />
            <b> Call Us</b>
            <p>+91 7057793525</p>
            <p>+91 7276960351</p>
          </div>
          <div
            className="col p-3 mb-2 text-white mx-2 text-center"
            style={{ height: 150, borderRadius: 20,backgroundColor:"#3BB9FF"}}
          >
            <img
              className="mx-2"
              src={location}
              alt="location"
              style={{ height: 25, width: 25, marginBottom: 10 }}
            />
            <b>Location</b>
            <p>V8QH+PX9, City Chowk, Buddi lane, Naralibag, Aurangabad, Maharashtra 431001</p>
          </div>
          <div
            className="col p-3 mb-2 text-white mx-2 text-center"
            style={{ height: 150, borderRadius: 20,backgroundColor:"#3BB9FF"}}
          >
            <img
              className="mx-2"
              src={clock}
              alt="clock"
              style={{ height: 25, width: 25, marginBottom: 10 }}
            />
            <b>Visiting Hours</b>
            <p>Mon to Fri : 11 am – 8 pm, Sat to Sun : 11 am – 1 pm</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
