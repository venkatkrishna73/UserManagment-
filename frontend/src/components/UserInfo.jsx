import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";

function UserInfo(){
    return (<div className="row">
        <div className="col-md-6"><UserForm /></div>
        <div className="col-md-6"><UserList /></div>
    </div>
    );
}
export default UserInfo;