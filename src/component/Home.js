import { useState } from "react";
import HomeBack4 from "../images/HomeBack4.jpeg";
import CloudStorage from '../images/CloudStorage.png'
import FastAccess from '../images/FastAccess.png'
import NoteOranized from '../images/NoteOranized.png'
import MereChat from '../images/MereChat.jpg'
import './style1.css'

export default function Home() {

  const [NoteOranizedText, setNoteOranizedText] = useState("With MereKeeps, you can easily organize your notes in a way that makes sense to you.")
  const [FastAccessText, setFastAccessText] = useState("MereKeeps provides a variety of tools and features that allow you to quickly and easily access your notes.")
  const [CloudStorageText, setCloudStorageText] = useState("MereKeeps offers secure cloud storage for all your notes, so you can access them from anywhere and on any device.")

  const [viewlessNoteOranized, setviewLessNoteOranized] = useState(false)
  const [viewlessFastAccess, setviewLessFastAccess] = useState(false)
  const [viewlessCloudStorage, setviewLessCloudStorage] = useState(false)
  
  // const DataArr=["With MereKeeps, you can easily organize your notes in a way that makes sense to you. Whether you prefer to categorize them by topic, tag them with keywords, or store them in specific folders, MereKeeps makes it easy to find what you're looking for. This feature is particularly useful for users who have a lot of notes and want to keep them organized for easy reference.",
  // "MereKeeps provides a variety of tools and features that allow you to quickly and easily access your notes. The search function allows you to find specific notes by keyword or tag, making it easy to locate the information you need. Additionally, the 'Recently Viewed' feature allows you to quickly access notes that you've recently worked on, so you can pick up where you left off. This feature is particularly useful for users who want to save time and stay organized, as it allows you to find and access the notes you need quickly and easily. With MereKeeps, you can spend less time searching for information and more time focusing on what's important.",
  // "MereKeeps offers secure cloud storage for all your notes, so you can access them from anywhere and on any device. This means that you can work on your notes at home, at the office, or on-the-go, and still have access to all your important information. MereKeeps takes security seriously and ensures that all your notes are stored securely and protected from unauthorized access."]

  const toggle=(e)=>{
    //console.log(e.target.id)
    if(e.target.id==="NoteorganizationBtn")
    {
      setNoteOranizedText("With MereKeeps, you can easily organize your notes in a way that makes sense to you. Whether you prefer to categorize them by topic, tag them with keywords, or store them in specific folders, MereKeeps makes it easy to find what you're looking for. This feature is particularly useful for users who have a lot of notes and want to keep them organized for easy reference.")
      setviewLessNoteOranized(true)
    }
    else if(e.target.id==="FastAccessTextBtn")
    {
      setFastAccessText("MereKeeps provides a variety of tools and features that allow you to quickly and easily access your notes. The search function allows you to find specific notes by keyword or tag, making it easy to locate the information you need. Additionally, the 'Recently Viewed' feature allows you to quickly access notes that you've recently worked on, so you can pick up where you left off. This feature is particularly useful for users who want to save time and stay organized, as it allows you to find and access the notes you need quickly and easily. With MereKeeps, you can spend less time searching for information and more time focusing on what's important.")
      setviewLessFastAccess(true)
      
    }
    else if(e.target.id==="CloudStorageTextBtn")
    {
      setCloudStorageText("MereKeeps offers secure cloud storage for all your notes, so you can access them from anywhere and on any device. This means that you can work on your notes at home, at the office, or on-the-go, and still have access to all your important information. MereKeeps takes security seriously and ensures that all your notes are stored securely and protected from unauthorized access.")
      setviewLessCloudStorage(true)
    }
  }

  return (
    <>
      {/* header */}
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <img src={HomeBack4} className="img-fluid" alt="HomeBack3"/>
          </div>
        </div>
      </div>

      {/* Our Fetarures */}
      <div className="container-fluid pt-5">
        <div className="row m-auto">
          <div className="col-md-12 text-center">
            <h2 className="fw-bold">Our Features</h2>
          </div>
        </div>
        <div className="row m-auto mt-4">
          <div className="col-md-4 text-center mb-5">
            <img src={NoteOranized} className="img-fluid" alt="HomeBack1"/>
            <h2 className="fw-bold mt-4">Note organization</h2>
            <p className="px-4">{NoteOranizedText}</p>
            <button hidden={viewlessNoteOranized} id="NoteorganizationBtn" type="button" onClick={toggle} className="btn border btn-success">View More</button>
          </div>
          <div className="col-md-4 text-center mb-5">
            <img src={FastAccess} className="img-fluid" alt="HomeBack1"/>
            <h2 className="fw-bold mt-4">Fast Access</h2>
            <p className="px-4">{FastAccessText}</p>
            <button hidden={viewlessFastAccess} id="FastAccessTextBtn" type="button" onClick={toggle} className="btn border btn-success">View More</button>
          </div>
          <div className="col-md-4 text-center mb-5">
            <img src={CloudStorage} className="img-fluid" alt="HomeBack1"/>
            <h2 className="fw-bold mt-4">Cloud storage</h2>
            <p className="px-4">{CloudStorageText}</p>
            <button hidden={viewlessCloudStorage} id="CloudStorageTextBtn" type="button" onClick={toggle} className="btn border btn-success">View More</button>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="container-fluid">
        <div className="row m-auto">
          <div className="col-md-6 mb-5">
          <a href="/"><img src={MereChat} className="img-fluid" alt="HomeBack1"/></a>
          </div>
          <div className="col-md-6 mb-5">
          <h2 className="fs-1 fw-bold">Another Platform<br/>We Have</h2>
          <p className="fs-4">MereChat - Experience messaging like never before</p>
          <div className="row m-auto">
          <div className="col-md-6 mb-5">
            <p>MereChat is a user-friendly messaging platform that allows you to easily connect with your friends and loved ones. With MereChat, you can send and receive messages in real-time, making it easy to stay in touch with those who matter most to you. Whether you're at home or on the go, MereChat lets you send messages to your friends from any device.</p>
          </div>
          <div className="col-md-6 mb-5">
          <p> MereChat is designed to be fast, reliable, and secure, ensuring that your messages always get to their intended recipient without delay. So if you're looking for a messaging platform that makes it easy to stay connected with the people you care about, give MereChat a try.</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
