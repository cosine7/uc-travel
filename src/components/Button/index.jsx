import './index.scss'
import PropTypes from 'prop-types'
import { ImSpinner8 } from 'react-icons/im'

export default function Button(props) {
  const { text, icon, color, onClick, className, disabled, loading } = props

  return (
    <button
      className={`custom-btn custom-btn-color-${color} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {loading ? <ImSpinner8 className='spinner'/> : icon}
      {loading ? null : text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  text: '',
  color: 'blue',
  className: '',
  disabled: false,
  loading: false,
}