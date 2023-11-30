import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useCreateStudentMutation} from './features/StudentSlice';
const CreateNew = ()=>{
   const [values , setvalues] = useState({});
const [show,setshow] = useState(false);
const [createStudent,res] = useCreateStudentMutation();
    function handleChange(e){
        setvalues({ ...values, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log("values from user : ",values);
        setshow(true);
        const response = await createStudent(values);
        if(res){
            console.log("successfully uploded !!");
            setvalues({});
        }
        else{
            console.log("error in uploading !!");
        }
    }
    return (
        <div>
            create New Student :
            <div>

            <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Form.Group>
         
         
          <Button type="submit">Submit form</Button>
        </Form>

       {/* {show ?<div><h1>Progress : {progress}</h1></div>:''} */}

            </div>
        </div>
    )
}

export default CreateNew;