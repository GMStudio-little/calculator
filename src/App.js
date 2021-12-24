import Calculator from "./Scenes/calculator/calculator";
import Integral from "./Scenes/integral/integral";
import Rate from "./Scenes/rate/rate";
import SimpleGraphic from "./Scenes/simple grafik/simplegraphic";
import Temperature from "./Scenes/temperature/temperature";
import Ulamjlal from "./Scenes/ulamjlal/ulamjlal";
import Unit from "./Scenes/unit/unit";
import React from "react";
import { useState } from "react";


const Btn = (props) => {

  const [test, setTest] = useState(0);

  function OnClick() {
    props.change(props.id);
  }

  return (
    <div style={style.buttonBack}>
      <div style={{ flex: 1 }}> </div>
      <div style={{ flex: 3, display: 'flex', flexDirection: "column" }}>
        <div style={{ flex: 1 }}></div>
        <button style={style.button} onClick={OnClick} >
          {props.name}
        </button>
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}


const SideBar = (props) => {
  return (
    <div style={style.side}>
      <Btn change={props.change} name='Calculator' id={1} />
      <Btn change={props.change} name='Temperature' id={2} />
      <Btn change={props.change} name='Rate' id={3} />
      <Btn change={props.change} name='Unit' id={4} />
      <Btn change={props.change} name='Simple Graphic' id={5} />
      <Btn change={props.change} name='Integral' id={6} />
      <Btn change={props.change} name='Ulamjlal' id={7} />
    </div>
  );
}


const App = () => {

  const [scene, setScene] = useState(2);

  function Change(i) {
    setScene(i);
  }

  switch (scene) {
    case 1:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Calculator />
        </div>
      );
      break;
    case 2:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Temperature />
        </div>
      );
      break;
    case 3:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Rate />
        </div>
      );
      break;
    case 4:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Unit />
        </div>
      );
      break;
    case 5:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <SimpleGraphic />
        </div>
      );
      break;
    case 6:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Integral />
        </div>
      );
      break;
    case 7:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Ulamjlal />
        </div>
      );
      break;
    default:
      return (
        <div style={{ display: 'flex', flex: 1 }}>
          <SideBar change={Change} />
          <Calculator />
        </div>
      );
      break;
  }

}

const style = {
  side: {
    backgroundColor: "gray",
    // width: "15vw",
    height: "100vh",
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  buttonBack: {
    display: 'flex',
    flex: 1,
    // backgroundColor: "red",
    margin: 10,
    flexDirection: 'row',
  },
  button: {

    flex: 2

  },
  Main: {

  }
}

export default App;


