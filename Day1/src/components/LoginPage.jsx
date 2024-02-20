// // src/pages/LoginPage.jsx
import { useForm } from 'react-hook-form';
import '../assets/css/LoginPage.css'; // Import the CSS file

function LoginPage() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
  };

  return (
    <div className="container"> {/* Add container class here */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input type="text" {...register('email', { required: true })} />
        <br />
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
