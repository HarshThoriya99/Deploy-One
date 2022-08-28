import "./App.css";
import React, {useState} from "react";
import RegistrationForm from "./pages/compony-input";
import ComponyList from "./pages/compony-list";

function App() {
  const [compony, setCompony] = useState({
    componyName: "",
    address: "",
    type: "",
  });
  const [componyList, setComponyList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const callBackAdd = (compony) => {
    debugger;
    let tempComponyList = componyList;
    console.log(selectedIndex);
    if (selectedIndex != null) {
      tempComponyList[selectedIndex] = compony;
      setSelectedIndex(null);
    } else {
      tempComponyList.push(compony);
    }
    setComponyList(JSON.parse(JSON.stringify(tempComponyList)));
  };

  const deleteItem = (index) => {
    debugger;
    let tempDeleteItem = componyList;
    tempDeleteItem.splice(index, 1);
    setComponyList(JSON.parse(JSON.stringify(tempDeleteItem)));
    if (selectedIndex === index) {
      setCompony({componyname: "", address: "", type: ""});
    }
  };

  const editItem = (item, index) => {
    debugger;
    setCompony(item);
    setSelectedIndex(index);
  };

  return (
    <div className="App">
      <RegistrationForm
        onAdd={callBackAdd}
        data={compony}
        selectedIndex={selectedIndex}
      />
      <ComponyList list={componyList} onDelete={deleteItem} onEdit={editItem} />
    </div>
  );
}
export default App;
