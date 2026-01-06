import { useForm } from "react-hook-form";

function UserForm({handleCreateUser}){
    const {register, handleSubmit} = useForm();
    
    return (
    <div>
        <p className="fs-1 text-center text-info mt-5">Create User</p>
        <form className="p-4 bg-light" onSubmit={handleSubmit(handleCreateUser)}>
            <input className="form-control mb-3" {...register('username')} placeholder="username" />
            <input className="form-control mb-3" {...register('password')} placeholder="password" type="password"/>
            <input type="date" {...register('dob')} className="form-control mb-3"/>
            <input className="form-control mb-3" {...register('email')} placeholder="email" type="email"/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
}
export default UserForm;