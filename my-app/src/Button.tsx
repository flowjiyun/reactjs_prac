import PropTypes from 'prop-types'
import Styles from './Button.module.css'

interface ButtonProps {
  text: string
}


function Button({text}: ButtonProps): JSX.Element {
  return (
    <button className={Styles.btn}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;