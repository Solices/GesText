import React from "react";
import "./About.css";
function About()
{
  return(
    <div className="text" 
    style={{
        breakInside: "avoid",
      }}>
      <h1
      style={{
        position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 140,
          left: 750


      }}>
      Welcome to GesText!
      </h1>
      <div class = "info"
      >
      <div class = "section1" style={{height: 700}}>
        <img src={require('./stat1.png')} 
        style={{
          position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            top: 220,
            left: 100,
            width: 500,
            height: 500,


        }}/>
        <p
        style={{
          position: "relative",
          left: 700,
          top: -220,


        }}>
          <br></br>
          &emsp; &emsp; &emsp;As the new Covid-19 variants continue to limit our social interactions, 
          the elderly can begin to feel isolated if they spend all their time at home. 
          Some may want to talk to their children or grandchildren, and others could possibly want a way of communicating to others. 
          However, technologies such as phones and computer keyboards can be difficult to use, especially if the keys are small and hard to see. 
          Our project, GesText, attempts to remedy this by making communication easier and faster for deaf seniors. 
          Our web application is similar to that of Siri or Speech-to-Text, but instead of speech, it utilizes Tensorflow, an open-ended machine learning platform, 
          to identify American Sign Language gestures and convert them to text form.

        </p>
      </div>
      <div class="section2" style={{height: 700}}>
        <img src={require('./lonelystat.png')} 
        style={{
          position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            top: -70,
            left: 1300,
            width: 700,
            height: 700,


        }}/>
        <p
        style={{
          position: "relative",
          left: 100,
          top: -540,


        }}>
        &emsp; &emsp; &emsp;There were several steps that we took in order to create our project. We started by importing all the Python dependencies we would need, some of which include opencv, uuid, time, etc. We then created an array of American Sign Language symbols we wanted to collect, and set up the pathways of our folders. After that, we captured images of us doing various sign language symbols; we did this using cv2.videoCapture() in Jupyter Notebook, and used the imported uuid and time modules to capture a photo every ten seconds. We took roughly forty photos of each letter, as the more photos we take, the more the algorithm has to learn from, and the accuracy gets higher. After taking photos of our parents doing the ASL signs as well, we had about 4400 photos, an amount that ensured our program would be at least decently accurate. (the more photos taken ensures higher accuracy) Then, we used tzutalin’s labelImg directory to label the images; this step catagorized the dimensions of the symbols and would later be used by the computer to identify the text equivalent of an ASL hand sign. We then partitioned our images and the resulting dimension code produced into training and testing folders.

        </p>
      </div>
      <div class="section3" style={{height: 700}}>
        <img src={require('./aslstat.png')} 
          style={{
            position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              top: -20,
              left: -10,
              width: 700,
              height: 700,


          }}/>
        <p
        style={{
          position: "relative",
          left: 700,
          top: -500,


        }}>
          <br></br>
          &emsp; &emsp; &emsp;While some ASL conversion apps already exist, most involve complex functions and are hard to use. We wanted to make an easy-to-use graphical user interface that was not overly-complicated to the average person. To do this, we implemented three buttons: one to add the current detected letter if its accuracy exceeded the threshold, a space button, and a backspace button in case the user makes a mistake. The first button executed the wordt function above and simply concatenated it to the existing string of letters. Next, the space button simply concatenated an empty “ “ to the existing string. Lastly, the backspace button took the substring that excluded the last letter of the existing string and updated the displayed string.

        </p>
      </div>


      
    </div>
    </div>
  )
}



export default About;