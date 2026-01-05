import { useForm } from "react-hook-form";

function UserForm(){
    const { register, handleSubmit } = useForm();

    return (
    <div>
        <p className="fs-1 text-center text-info mt-5">Create User</p>
        <form onSubmit={handleSubmit}>
            <input type="text" {...register('username')} placeholder="username" className="form-control-mb-3" />
            <input type="date" {...register('dob')} className="form-control-mb-3" />
            <input type="text" {...register('email')} placeholder="email" className="form-control-mb-3" />
            <button className="btn btn-primary">Add User</button>
        </form>
    </div>
    );
}
export default UserForm;