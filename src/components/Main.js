import SideContainer from './SideContainer';
import Form from './BookingForm';

const Main = ({
  formInput,
  setFormInput,
  avaliableTimes,
  setAvaliableTimes,
  submitForm,
}) => (
  <main
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
    }}
  >
    <SideContainer />
    <Form
      formInput={formInput}
      setFormInput={setFormInput}
      avaliableTimes={avaliableTimes}
      setAvaliableTimes={setAvaliableTimes}
      submitForm={submitForm}
    />
  </main>
);

export default Main;
