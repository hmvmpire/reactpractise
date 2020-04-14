import React,{useState} from 'react'
function Form({addEmployee}){
    const [name,setName] =  useState('');
    const [age,setAge] =  useState('');
    const [salary,setSalary] =  useState('');
  
    const handleSubmit = e =>{
    e.preventDefault();
      if(!name) return;
      addEmployee(name,age,salary);
      setName('');
      setAge('');
      setSalary('');
    };

  return(
          <div>
              <div className="container">
                  <h2 className="text-center">Add an Employee</h2>
                  <form onSubmit={handleSubmit}>
                  <input className="form-control" type="text" value={name}  placeholder="Enter your name" onChange = {e => setName(e.target.value)} />        
                  <input className="form-control" type="number" value={salary}   placeholder="Enter employee salary" onChange = {e => setSalary(e.target.value)} ></input>
                  <input className="form-control" type="number" value={age}   placeholder="Enter employee age" onChange = {e => setAge(e.target.value)} ></input>
                            
                  <button  className="btn margin-top btn-success" type="submit" >Add</button>
                  </form>
              </div>
          </div>
      )
}


function Employees()
{
    const[employees, setEmployess] = useState([{
        name: 'Learn about Angular Hooks',
        salary: '4011',
        age: '22'
      },
      {
        name: 'Learn about Angular Hooks',
        salary: '4022',
        age: '44'
    
      },
      {
        name: 'Learn about Angular Hooks',
        salary: '40411',
        age: '33'
    
      }]);
    
      const addEmployee = (name,age,salary) =>{
        const newEmployee = [...employees,{name,salary,age}];
        setEmployess(newEmployee);
      };

      const removeEmployee = index =>{
        const newEmployee = [...employees];
        newEmployee.splice(index,1);
        setEmployess(newEmployee);
      };


    return(
        <div class="container">
            <h1 class="text-center">All Employees Data</h1>
            <br/>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">employee name</th>
                    <th scope="col">employee salary</th>
                    <th scope="col">age</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees ?
                        employees.map((employee,index)=>
                            <tr>
                            <th scope="row">{index}</th>
                            <td>{employee.name}</td>
                            <td>$ {employee.salary}</td>
                            <td>{employee.age}</td>
                            <td><button className="btn btn-danger" onClick={() => removeEmployee(index) } >Delete</button></td>
                            </tr>
                        )
                        :
                        null
                    }
                </tbody>
            </table>
            <Form addEmployee={addEmployee}></Form>
        </div>
    )
    
}

export default Employees;
