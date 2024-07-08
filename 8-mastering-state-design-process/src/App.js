import Accordion from "./components/Accordion";



function App() {
  const items = [
  {
    id: 1,
    label: "Can i use react?",
    content: "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can."
  },
  {
    id:2,
    label: "Can i use js?",
    content: "Yes you can. Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can."
  },
  {
    id:3,
    label: "Can i use django?",
    content: "Yes you can. Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.Yes you can."
  }
  ];

  return (
    <div className="App py-3">
      <center>
      </center>
      <Accordion items={items} />
    </div>
  );
}

export default App;
