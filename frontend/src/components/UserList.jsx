


function UserList({handleReadUsers, handleUpdateUser,handleDeleteUser, users}){
    return (
        <div>
            <h1 className="fs-1 text-center text-info mt-5">UserList</h1>
            <table className="table table-centered table-hover mt-4">
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
              </thead>  
              <tbody>
            {
                users.map((user, index)=>{
                    return(<tr key={index} className="" >
                        <td>{user.id}</td>
                        <td> {user.username}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td> 
                            <button className="btn btn-danger m-6" onClick={()=>handleDeleteUser(user.id)}>X</button>
                            <button className="btn btn-warning m-6" onClick={()=>handleUpdateUser(user)}>Edit</button>
                        </td>
                    </tr>)
                })
            }
            </tbody>
            </table>
        </div>
    );
}
export default UserList;