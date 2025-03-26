import Entry from "./components/Entry.jsx";
import Header from "./components/Header.jsx";
import data from "/data.js";
export default function App() {
  const dataElements = data.map((data) => {
    return (
      <Entry
        key={data.id}
        {...data}
        image={data.image.src}
      />
    );
  });
  return (
    <>
      <Header />
      <main>{dataElements}</main>
    </>
  );
}
