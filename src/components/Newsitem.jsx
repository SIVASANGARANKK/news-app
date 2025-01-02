import image from '../assets/news11.jpeg';

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
    style={{height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }}
    className="card bg-dark text-light mb-3 mt-5">
      <img
        src={src ? src : image}
        style={{ height: "500px", width: "80%", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div 
      className="card-body" >
        <h5 className="card-title mt-5">{title.slice(0, 50)}</h5>
        <p className="card-text h2">
          {description ? description.slice(0, 90) : "News"}
        </p>
        {/* <a href={url} className="btn btn-primary">
          Read more
        </a> */}
      </div>
    </div>
  );
};

export default Newsitem;