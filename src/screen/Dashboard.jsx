import React from "react";
import "../screen/Dashboard.css";
import BasicInfoJs from "../topics/javascriptTopic/BasicInfoJs";
import SynchronousAndAsynchronous from "../topics/javascriptTopic/SynchronousAndAsynchronous";
import Variables from "../topics/javascriptTopic/Variables";
import DataTypes from "../topics/javascriptTopic/DataTypes";
import DefaultParameter from "../topics/javascriptTopic/DefaultParameter";
import PreventDefault from "../topics/javascriptTopic/PreventDefault";
import StopPropagation from "../topics/javascriptTopic/StopPropagation";
import StrictMode from "../topics/javascriptTopic/StrictMode";
import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
import UndeclaredandUndefined from "../topics/javascriptTopic/UndeclaredandUndefined";
import Eval from "../topics/javascriptTopic/Eval";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";
// import NullUndefinedNaN from "../topics/javascriptTopic/NullUndefinedNaN";

const Dashboard = ({ data }) => {
  let JavascriptCompRender;

  switch (data) {
    case 0:
      JavascriptCompRender = <BasicInfoJs />;
      break;
    case 1:
      JavascriptCompRender = <SynchronousAndAsynchronous />;
      break;
    case 2:
      JavascriptCompRender = <Variables />;
      break;
    case 3:
      JavascriptCompRender = <DataTypes />;
      break;
    case 4:
      JavascriptCompRender = <DefaultParameter />;
      break;
    case 5:
      JavascriptCompRender = <PreventDefault />;
      break;
    case 6:
      JavascriptCompRender = <StopPropagation />;
      break;
    case 7:
      JavascriptCompRender = <StrictMode />;
      break;
    case 8:
      JavascriptCompRender = <NullUndefinedNaN />;
      break;
    case 9:
      JavascriptCompRender = <UndeclaredandUndefined />;
      break;
    case 10:
      JavascriptCompRender = <Eval />;
      break;
      case 11:
      JavascriptCompRender = <Eval />;
      break;
      case 12:
      JavascriptCompRender = <Eval />;
      break;
      case 13:
      JavascriptCompRender = <Eval />;
      break;
      case 14:
      JavascriptCompRender = <Eval />;
      break;
      case 15:
      JavascriptCompRender = <Eval />;
      break;
      case 16:
      JavascriptCompRender = <Eval />;
      break;
      case 17:
      JavascriptCompRender = <Eval />;
      break;
      case 18:
      JavascriptCompRender = <Eval />;
      break;
      case 19:
      JavascriptCompRender = <Eval />;
      break;
      case 20:
      JavascriptCompRender = <Eval />;
      break;

    default:
      JavascriptCompRender = <BasicInfoJs />;
  }

  return <div className="dashboard-container">{JavascriptCompRender}</div>;
};

export default Dashboard;
