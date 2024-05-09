import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "./image/logo.png";
import videoBg from "./image/videobg.webm";

function Banner() {
  return (
    <div className="banner-container">
      <video className="videoTag" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}

function Topbar() {
  return (
    <div className="top-bar">
      <div className="top">
        <div className="container">
          <div className="top-bar-left">
            <a href="tel:+84 (028) 35193536">
              <Button
                className="phone"
                variant="text"
                startIcon={<LocalPhoneIcon />}
              >
                +84 (028) 35193536
              </Button>
            </a>
            <a href="mailto:icare@KumiGumi.com">
              <Button
                className="email"
                variant="text"
                startIcon={<EmailIcon />}
              >
                info@majesticin.com
              </Button>
            </a>
          </div>
          <Button variant="text" startIcon={<LoginIcon />}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header-fixed">
      <div className="container">
        <div className="header">
          <div className="col header-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col header-nav">
            <ul className="nav">
              <li className="nav-item">
                <Button variant="text">Home</Button>
              </li>
              <li className="nav-item">
                <Button variant="text">Book info</Button>
              </li>
              <li className="nav-item">
                <Button variant="text">Blog</Button>
              </li>
              <li className="nav-item">
                <Button variant="text">Contact</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="container">
      <div className="content">
        <Banner></Banner>
        <div className="box-bottom">
          <div className="box">
            <a href="/">Our Story</a>
          </div>
          <div className="box">
            <a href="/">Made for Trip</a>
          </div>
          <div className="box">
            <a href="/">Note the Journey</a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          {/* <div id="MyClockDisplay" class="clock" onload="showTime()"></div> */}
          <div id="clockdate">
            <div class="clockdate-wrapper">
              <div id="clock"></div>
              <div id="date"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <div className="copyright-text">
            <p>© 2024 – All right copy by CAT-Team</p>
          </div>
          <div className="btn-share"></div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;

// function showTime() {
//   var date = new Date();
//   var h = date.getHours(); // 0 - 23
//   var m = date.getMinutes(); // 0 - 59
//   var s = date.getSeconds(); // 0 - 59
//   var session = "AM";

//   if (h == 0) {
//     h = 12;
//   }

//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   var time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;

//   setTimeout(showTime, 1000);
// }

// showTime();

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  // ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " ";

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
