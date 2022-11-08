import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {
  const arrobj = [
    { name: "asd", age: "12" },
    { name: "jhsj", age: "32" },
    { name: "jfhisf", age: "82" },
    { name: "jhfs", age: "15" },
  ];
  return (
    <div>
      <Header value="Amrit" help="sjhsjhf" obb={arrobj} />
      <Footer />
    </div>
  );
}

export default App;
