export const UserValidation=(user)=>{
    let errors={};
    if(user.name.trim()==""){
        errors.name="Please enter a name";
    }
    else if(user.name.trim().length<4)
    {
        errors.name="name must be at least 4 characters";
    }

    if(user.email.trim()==""){
        errors.email="Please enter a email";
    }
    else if(user.email.trim().length<20)
    {
        errors.email="email must be at least 10 characters";
    }

    if(user.password.trim()==""){
        errors.password="Please enter a password";
    }
    else if(user.password.trim().length<8)
    {
        errors.password="password must be at least 8 characters";
    }
    return errors;
// console.log(errors);
}