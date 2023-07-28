import { useFormik} from 'formik';
import styles from './styles.module.css';

function NewForm1() {
    const /* formik */ {handleChange,handleSubmit,values} = useFormik({
        initialValues:{
            firstName: 'Marry',
            lastName: 'Jane',
            email: 'mjcoop@mj.com',
            gender:'female',
            favoriteChars:[],//'' also works just fine
            villian:''
          },
          onSubmit:(values) => { // uses handleSubmit
            //await new Promise((r) => setTimeout(r, 500));
            //(JSON.stringify(values, null, 2));
            console.log(values)
          }
    })
    return (
        <div>
            <h1>Sign Up</h1> {/* formik.handleSubmit , formik.values, formik.handleChange */}
            <form onSubmit={handleSubmit} > 
                    <div style={{marginBottom:"2rem"}}>
                    <label htmlFor="firstName">First Name : </label>
                    <input id="firstName" name="firstName" onChange={handleChange} value={values.firstName} placeholder="Jane" /> {/* name props are the initVal for Formik comp */}
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <label htmlFor="lastName">Last Name : </label>
                    <input id="lastName" name="lastName" onChange={handleChange} value={values.lastName} placeholder="Doe" />
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <label htmlFor="email">Email : </label>
                    <input
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    />
                    </div>
                    <div style={{marginBottom:"2rem"}}>
                    <span>MALE</span>
                    <input id="male" name="gender" value="male" onChange={handleChange} defaultChecked={values.gender==='male'}  type="radio" /> {/* name props are the initVal for Formik comp */}
                    {/* </div>
                    <div style={{marginBottom:"2rem"}}> */}
                    {/* <label htmlFor="gender">Last Name : </label> */}
                    <span>FEMALE</span>
                    <input id="female" name="gender" value="female" onChange={handleChange} defaultChecked={values.gender==='female'} type="radio" />
                    </div>
    
                    <span>Favorite Characters:</span>
                    <div className={styles.charCheckbox}>
    
                    <div style={{padding:"1rem"}}>
                        Naruto
                        <input id="favoriteChars" name="favoriteChars" value="Naruto" onChange={handleChange} defaultChecked={values.favoriteChars==='Naruto'}  type="checkbox" /> {/* name props are the initVal for Formik comp */}
                    </div>
                    <div style={{padding:"1rem"}}>
                        Jiraiya
                        <input id="favoriteChars" name="favoriteChars" value="Jiraiya" onChange={handleChange} defaultChecked={values.favoriteChars==='Jiraiya'} type="checkbox" />
                    </div>
                    <div style={{padding:"1rem"}}>
                        Tsunade
                        <input id="favoriteChars" name="favoriteChars" value="Tsunade" onChange={handleChange} defaultChecked={values.favoriteChars==='Tsunade'} type="checkbox" />
                    </div>
                    <div style={{padding:"1rem"}}>
                        Shino
                        <input id="favoriteChars" name="favoriteChars" value="Shino" onChange={handleChange} defaultChecked={values.favoriteChars==='Shino'} type="checkbox" />
                    </div>
    
                    <div style={{padding:"1rem"}}>
                        Neji
                        <input id="favoriteChars" name="favoriteChars" value="Neji" onChange={handleChange} defaultChecked={values.favoriteChars==='Neji'} type="checkbox" />
                    </div>
    
                    <div style={{padding:"1rem"}}>
                        Gaara
                        <input id="favoriteChars" name="favoriteChars" value="Gaara" onChange={handleChange} defaultChecked={values.favoriteChars==='Gaara'} type="checkbox" />
                    </div>
                   
                    </div>
                     <span>Favorite Villian: </span>
                    <div style={{marginBottom:"2rem"}}>
                        <select className='select' name="villian" onChange={handleChange} value={values.villian}>
                            <option value="Itachi">Itachi</option>
                            <option value="Pain">Pain</option>
                            <option value="Orochimaru">Orochimaru</option>
                            <option value="Madara">Madara</option>
                            <option value="Obito">Obito</option>
                            <option value="Deidara">Deidara</option>
                            <option value="Zabuza">Zabuza</option>
                        </select>
                    </div>
    
    
                    <button type="submit">Submit</button>
    
                    <br/><hr/>
                    <code>{JSON.stringify(values)}</code>
                </form>
        </div>
      )
}

export default NewForm1