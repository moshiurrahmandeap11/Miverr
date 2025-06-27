import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
