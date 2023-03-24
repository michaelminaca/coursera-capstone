import SideContainer from './SideContainer';
import Form from './Form';

const Main = ({ formInput, setFormInput }) => (
  <main
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
    }}
  >
    <SideContainer />
    <Form formInput={formInput} setFormInput={setFormInput} />
  </main>
);

export default Main;
