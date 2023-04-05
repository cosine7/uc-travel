import './index.scss'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef((props, ref) => {
  const { placeholder, type, className } = props

  return (
    <div className={`custom-input ${className}`}>
      <input ref={ref} type={type} required />
      <span>{placeholder}</span>
    </div>
  )
})

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  className: '',
}

export default Input