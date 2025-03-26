import Entry from "./components/Entry.jsx";
import Header from "./components/Header.jsx";
import data from "/data.js";
export default function App() {
  const dataElements = data.map((data) => {
    return (
      <Entry
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
        image={data.img.src}
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
