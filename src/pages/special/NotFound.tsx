import { FaRegQuestionCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<div>
			<FaRegQuestionCircle />
			<h1>404</h1>
			<p>Oops! The page you are looking for doesn't exist.</p>
			<button  onClick={() => navigate('./')}>
				Go Login
			</button>
		</div>
	)
}

export default NotFound
