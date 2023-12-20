import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Қазақстанның көрікті жерлері</h2>
          <p>
          Дала тұрғынын басқаша көрініс, басқаша табиғат қоршайды. Жайқалған өзен, кең айдынды тұнық та жарқын, үйрек, қаз, аққулар су бетінде әсем қалықтап жүзеді, қиқулап үн қосады, бірақ бәрі де орынды, жарасымды.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
