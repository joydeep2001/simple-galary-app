import { useState } from "react";
import "./App.css";
import Galary from "./components/Galary";
import Tab from "./components/Tab";

const galaryData = [
  {
    image: "black-n-white-girl.jpeg",
    catagory: "black-n-white",
    url: `http://localhost:3000/img/"black-n-white-girl.jpeg`,
  },
  {
    image: "black-n-white-rose.jpeg",
    catagory: "black-n-white",
    url: `http://localhost:3000/img/black-n-white-rose.jpeg`,
  },
  {
    image: "black-n-white1.jpeg",
    catagory: "black-n-white",
    url: `http://localhost:3000/img/black-n-white1.jpeg`,
  },
  {
    image: "potrait1.webp",
    catagory: "potrait",
    url: `http://localhost:3000/img/potrait1.webp`,
  },
  {
    image: "potrait2.jpg",
    catagory: "potrait",
    url: `http://localhost:3000/img/potrait2.jpg`,
  },
  {
    image: "potrait3.jpeg",
    catagory: "potrait",
    url: `http://localhost:3000/img/potrait3.jpeg`,
  },
];

function App() {
  const [activeCatagory, setActiveCatagory] = useState("all");
  const tabs = [
    {
      name: "All",
      catagory: "all",
    },
    {
      name: "Black and White",
      catagory: "black-n-white",
    },
    {
      name: "Potrait",
      catagory: "potrait",
    },
  ];
  const filterGalaryData = () => {
    if (activeCatagory === "all") return galaryData;
    else return galaryData.filter((data) => data.catagory === activeCatagory);
  };

  return (
    <div>
      <div>
        <Tab tabs={tabs} active={activeCatagory} onClick={setActiveCatagory} />
      </div>
      <Galary data={filterGalaryData()} />
    </div>
  );
}

export default App;
