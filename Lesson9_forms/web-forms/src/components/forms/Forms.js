import { Formik, Field, Form } from 'formik';

function Forms() {
  return (
    <div>
        <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        //await new Promise((r) => setTimeout(r, 500));
        //(JSON.stringify(values, null, 2));
        console.log(values)
      }}
    >
      <Form>
        <div style={{marginBottom:"2rem"}}>
        <label htmlFor="firstName">First Name : </label>
        <Field id="firstName" name="firstName" placeholder="Jane" /> {/* name props are the initVal for Formik comp */}
        </div>
        <div style={{marginBottom:"2rem"}}>
        <label htmlFor="lastName">Last Name : </label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        </div>
        <div style={{marginBottom:"2rem"}}>
        <label htmlFor="email">Email : </label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        </div>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Forms