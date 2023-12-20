import "../App.css";

export const Benefits = (props) => {
  return (
    <div id="benefits" className="text-center">
      <div className="container">
        <div className="section-title">
          <p>
            Our team of professionals will give you a personalized treatment
            from start to finish in all the procedures and contracted services.
          </p>{" "}
          <h1 className="wowclass">Қазақтың жеті қазынасы</h1>
        </div>
        <div className="row benefits-wrap">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-lg-3 col-md-4 col-sm-6 col-sx-24"
                >
                  <div className="benefit-item">
                    <i className={d.icon}></i>
                    <img src={d.img} className="classimg" alt={d.name} />
                    <div className="descname">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
