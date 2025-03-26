
export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.image} alt={props.title}/>
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="../images/marker.png"
          alt="map marker icon"
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
/*country image title googleMapsLink dates text*/
