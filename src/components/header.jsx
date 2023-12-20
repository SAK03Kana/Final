export const Header = (props) => {
  return (
    <div>
      <header id="home">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.headerData
                      ? props.headerData.title
                      : "ҚАЗАҚСТАН"}
                    <span></span>
                  </h1>
                  <p>
                    {props.headerData ? props.headerData.paragraph : "Патриот"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Көбірек ақпарат
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Қазақстан туралы</h2>
                <p>
                  {props.aboutData
                    ? props.aboutData.paragraph
                    : "Қазақстан, ресми түрде Қазақстан Республикасы, теңізге шыға алмайтын ел, негізінен Орталық Азияда, Шығыс Еуропада аз бөлігі бар. Ол солтүстігінде және батысында Ресеймен, шығысында Қытаймен, оңтүстік-шығысында Қырғызстанмен, оңтүстігінде Өзбекстанмен және оңтүстік-батысында Түрікменстанмен шектеседі, Каспий теңізі бойында жағалау сызығы бар. Оның астанасы-Астана. Қазақстан жер көлемі бойынша әлемдегі тоғызыншы ел және теңізге шыға алмайтын әлемдегі ең ірі ел болып табылады. Оның халқы 20 миллион адамды құрайды, ал халықтың тығыздығы әлемдегі ең төменгі деңгейдің бірі - бір шаршы шақырымға 6 адамнан аз (бір шаршы мильге 16 адам). Этникалық қазақтар халықтың көп бөлігін құрайды, ал этникалық орыстар айтарлықтай азшылықты құрайды. Ресми түрде зайырлы Қазақстан мұсылман көпшілік ел болып табылады, дегенмен елдегі этникалық орыстар айтарлықтай христиан қауымдастығын құрайды."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
