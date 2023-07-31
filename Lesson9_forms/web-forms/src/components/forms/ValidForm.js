import { useFormik} from 'formik';
import styles from './styles.module.css';
import validationSchema from './Validations';
function ValidForm() {
    const /* formik */ {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({ //blur & touched : show errors after switching to another one
        initialValues:{
            firstName: 'Marry', 
            lastName: 'Jane',
            email: 'mjcoop@mj.com', //this values matches with validation names
            password:'',
            confirmPassword:''
          },
          onSubmit:(values) => { // uses handleSubmit
            //await new Promise((r) => setTimeout(r, 500));
            //(JSON.stringify(values, null, 2));
            console.log(values)
          },
          validationSchema
    })
    return (
        <div>
            <h1>Sign Up</h1> {/* formik.handleSubmit , formik.values, formik.handleChange */}
            <form onSubmit={handleSubmit} > 
                    <div style={{marginBottom:"2rem"}}>
                    <label className={styles.validLabel} htmlFor="firstName">First Name : </label>
                    <input id="firstName" name="firstName" onChange={handleChange} value={values.firstName} placeholder="Jane" /> {/* name props are the initVal for Formik comp */}
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <label className={styles.validLabel} htmlFor="lastName">Last Name : </label>
                    <input id="lastName" name="lastName" onChange={handleChange} value={values.lastName} placeholder="Doe" />
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <label className={styles.validLabel} htmlFor="email">Email : </label>
                    <input
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    />
                    {
                      errors.email && touched.email &&
                      (<div className={styles.errorBox}>
                        {errors.email}
                      </div>)
                    }
                    </div>

                    <div style={{marginBottom:"2rem"}}>
                    <label  className={styles.validLabel}>Password : </label>
                    <input id="password" name="password" type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="" /> {/* name props are the initVal for Formik comp */}
                    {
                      errors.password && touched.password &&
                      (<div className={styles.errorBox}>
                        {errors.password}
                      </div>)
                    }
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <label className={styles.validLabel} >Confirm Password : </label>
                    <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder="" />
                    {
                      errors.confirmPassword && touched.confirmPassword &&
                      (<div className={styles.errorBox}>
                        {errors.confirmPassword}
                      </div>)
                    }
                    </div>
    
    
                    <button type="submit">Submit</button>
    
                    <br/><hr/>
                    <code>{JSON.stringify(values)}</code>
                </form>
        </div>
      )
}

export default ValidForm