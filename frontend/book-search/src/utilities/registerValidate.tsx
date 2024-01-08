const registerValidate = (data: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
  }): boolean => {
    const { firstname, lastname, email, phone, password } = data;
  
    if (
      firstname.trim() === '' ||
      lastname.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      password.trim() === ''
    ) {
      console.error('Please fill in all required fields');
      return false;
    }
  
    return true;
  };
  
  export default registerValidate;
  