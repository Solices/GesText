import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import {drawRect} from "./utilities"; 
import {wordt} from "./utilities"
import chart from './aslchart.png'
import Navbar from './Navbar'
import { Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import How from "./How"
import Contact from "./Contact"
var a = ""; 
var arr = [];
var switchon = false;
let count = 0

function copy() {
  console.log(a)
}
function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}
function highocc(array)
{
    if(array.length == 0)
        return "";
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function App() {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const runCoco = async () => {
    const net = await tf.loadGraphModel('https://storage.googleapis.com/tensorflowjsrealtimemodel1/model.json')
    setInterval(() => {
      detect(net);
    }, 500);
  };
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      const boxes = await obj[0].array()
      const classes = await obj[4].array()
      const scores = await obj[6].array()
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.5, videoWidth, videoHeight, ctx)}); 
      a = wordt(boxes[0], classes[0], scores[0], 0.5)
      if(!(a === ''))
        arr.push(a);
      console.log(arr)
      console.log(a)
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
      const targetDiv = document.getElementById("button");
      if(count == 5 && switchon)
      {
        count = 0;
        document.getElementById("thisid").click();
      }
      else
      {
        count++;
        if(count > 5)
          count = 0;
      }
    }
  };
  useEffect(()=>{runCoco()},[]);
  const[words, setwords] = useState("");
  return (

    <div className="App">
      <header className = "menu">
      <li><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}><b href="#" class = "logo">GesText</b></Link></li>
            <ul>    
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/app">App</Link></li>
            
            <li><Link to="/how">How We Built It</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </header>
      



              <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 100,
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 800,
            height: 650,
          }}
        />
      <header className="App-header"
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        top: 720,
      }}
      >        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: -650,
            left: 50,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 800,
            height: 650,
          }}
        />
        <p>
          {words}
        </p> 
        
        </header>

        
        

        

        
        
        
        


      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div class = "button">
      <button 
      style={{
        position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 870,
          left: 700,
          width: 200,
          height: 100,


      }}
      id={"thisid"}
        onClick={() => {
            if(switchon)
            {
              a = highocc(arr)
              arr = []
              if(a == 'interpreter' || a == 'hello' || a == 'my' || a == 'name')
              {
                setwords(words + a + " ")
              }
              else{
                setwords(words + a)
              }
            }
            else
            {
              setwords(words + a)
            }
            //console.log(this.id)
        }}>Add Current Letter</button>
        <button 
        style={{
          position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 870,
            left: 900,
            width: 200,
            height: 100,
        }}
        onClick={() => {
        setwords(words + " ")

        }}>Add Space</button>
        <button 
        style={{
          position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 870,
            left: 1100,
            width: 200,
            height: 100,
        }}

        onClick={() => {
        setwords(words.substring(0, words.length - 1))

        }}>Backspace</button>
      </div>
      
      
    </div>
    
    
  );
}
waitForElm('button').then((elm) => {
  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        switchon = true;
        console.log('Checked');
      } else {
        switchon = false;
        console.log('Not checked');
      }
    });
  });
});

export default App
