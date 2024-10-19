import { useNavigate } from "react-router-dom"

const Login = () => {

const navigate = useNavigate()

    return (
        <div>
            Login
            <button onClick={()=>navigate('/dashboard')}>ingresar</button>
        </div>
    )
}

export default Login