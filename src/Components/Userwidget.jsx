import React from "react";
import "../css/Userwidget.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
function Userwidget() {
  return (
    <div className="homePageCol">
      <div className="topCourses">
        <div className="topHeader">
          <p>LinkedIn News</p>
          <InfoSharpIcon />
        </div>
        <div className="newsList">
          <div className="newsListMain">
            <div className="newsListCol">
              <span>.</span>
            </div>
            <div className="newsListCol2">
              <span>Local FMCG brands on the rise</span>
              <span>17h ago * 129 readers</span>
            </div>
          </div>
        </div>
        <div className="newsList">
          <div className="newsListMain">
            <div className="newsListCol">
              <span>.</span>
            </div>
            <div className="newsListCol2">
              <span>Local FMCG brands on the rise</span>
              <span>17h ago * 129 readers</span>
            </div>
          </div>
        </div>
        <div className="newsList">
          <div className="newsListMain">
            <div className="newsListCol">
              <span>.</span>
            </div>
            <div className="newsListCol2">
              <span>Local FMCG brands on the rise</span>
              <span>17h ago * 129 readers</span>
            </div>
          </div>
        </div>
        <div className="newsList">
          <div className="newsListMain">
            <div className="newsListCol">
              <span>.</span>
            </div>
            <div className="newsListCol2">
              <span>Local FMCG brands on the rise</span>
              <span>17h ago * 129 readers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userwidget;
