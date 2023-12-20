import '../App.css'

export const Services = (props) => {
  return (
    <div id="service" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 >Алаштың бес арысы</h2>
        </div>
        <div className="row service-wrap">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 col-sm-6 col-12"
                >
                  {" "}
                  <img
                    src={d.img}
                    className="img-responsive service-img"
                    alt={d.name}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
