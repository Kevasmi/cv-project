import './App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <section className='form-side'>
        <Form />
      </section>
      {/* <section className='cv-side'>
        <CurriculumVitae />
      </section> */}
    </div>
  );
}

export default App;
