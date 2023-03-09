export function Users(props){
 let containerdesign=   {
          border: "1px solid black",
          height: "350px",
          width: "300px",
          margin: "auto",
          borderRadius: "20px",
          color: "white",
          backgroundColor: "#ab58cc",
          border: "none",
          padding: "10px",
          marginTop:"10px"
        }
    return (
      <div
        style={containerdesign}
      >
        <img style={props.styleimage} src={props.image} alt="No image" />
        <h4 style={props.heading}>{props.designation}</h4>
        <h1 style={props.title}>{props.name}</h1>
        <p style={props.descstyle}>{props.description}</p>
      </div>
    );
}