import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';

const InputField = ({ label, id, type, placeholder, value, onChange, isDarkMode }) => {
  return (
    <div className="mb-6">
      <label className={`block text-gray-700 font-bold mb-2 text-2xl ${isDarkMode ? 'text-white' : ''}`} htmlFor={id}>
        {label}
      </label>
      <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : ''}`} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} 
      />
    </div>
  );
};

const SocialIcon = ({ icon, color, onClick, isDarkMode }) => {
  return (
    <div className={`text-3xl text-${color}-500 mr-4 cursor-pointer hover:text-${color}-700 ${isDarkMode ? 'text-white' : ''}`} onClick={onClick}>
      {icon}
    </div>
  );
};


const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="absolute top-0 right-0 mt-4 mr-4">
      <button className={`w-12 h-6 flex items-center rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-blue-300'} p-1 focus:outline-none`} onClick={onToggle}>
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isDarkMode ? 'translate-x-6' : ''}`}></div>
      </button>
    </div>
  );
};

const FacebookButton = ({ onClick, children, isDarkMode }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-Blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = () => {
    console.log('Realizando inicio de sesión con nombre de usuario:', username, 'y contraseña:', password);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    console.log('Realizando registro con nombre de usuario:', username, ', contraseña:', password, ', y correo electrónico:', email);
  };

  const handleGoogleLogin = () => {
    console.log('Realizando inicio de sesión de Google');
  };

  const handleGithubLogin = () => {
    console.log('Realizando inicio de sesión de GitHub');
  };

  const handleInstagramLogin = () => {
    console.log('Realizando inicio de sesión de Instagram');
  };

  const handleEmailLogin = () => {
    console.log('Realizando inicio de sesión de correo electrónico');
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex justify-center items-center h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
      <div className={`bg-red rounded-lg p-8 w-80 max-w-full mx-4 ${isDarkMode ? 'text-white' : ''}`}>
        <div className="flex items-center mb-4">
          <FaFacebook className={`text-6xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'} mr-2`} />
          <h1 className={`font-bold text-5xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`}>Facebook</h1>
        </div>
        <form>
          {!isLogin && (
            <InputField label="Full Name" id="fullname" type="text" placeholder="Enter your full name" value={fullname} onChange={(e) => setFullname(e.target.value)} isDarkMode={isDarkMode} />
          )}
          <InputField label="Email or Phone" id="username" type="text" placeholder="Enter your email or phone number" value={username} onChange={(e) => setUsername(e.target.value)} isDarkMode={isDarkMode} />
          <InputField label="Password" id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} isDarkMode={isDarkMode} />          
          {!isLogin && (
            <InputField label="Confirm Password" id="confirmPassword" type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isDarkMode={isDarkMode} />
          )}
          {error && <p className="text-red-500">{error}</p>}
          <FacebookButton onClick={isLogin ? handleLogin : handleRegister} isDarkMode={isDarkMode}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </FacebookButton>
          <div className="text-center mt-4">
            <a href="#" className={`text-blue-500 hover:text-blue-700 font-bold ${isDarkMode ? 'text-gray-300 hover:text-gray-500' : ''}`}>
              Forgot Password?
            </a>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <SocialIcon icon={<FcGoogle />} color="blue" onClick={handleGoogleLogin} isDarkMode={isDarkMode} />
            <SocialIcon icon={<SiGithub />} color="gray" onClick={handleGithubLogin} isDarkMode={isDarkMode} />
            <SocialIcon icon={<RiInstagramFill />} color="pink" onClick={handleInstagramLogin} isDarkMode={isDarkMode} />
            <SocialIcon icon={<AiOutlineMail />} color="blue" onClick={handleEmailLogin} isDarkMode={isDarkMode} />
          </div>
        </form>
        <p className={`text-center text-sm mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span
            className={`text-blue-500 font-bold cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'}`}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? ' Sign Up' : ' Log In'}
          </span>
        </p>
      </div>
    </div>
  );
}
