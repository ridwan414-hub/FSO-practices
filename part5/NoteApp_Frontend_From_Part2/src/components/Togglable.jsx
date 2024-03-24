/* eslint-disable linebreak-style */
import PropTypes from 'prop-types'
import { forwardRef, useImperativeHandle, useState } from 'react'

// eslint-disable-next-line react/display-name
const Togglable = forwardRef((props,refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return{ toggleVisibility }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})
Togglable.propTypes = {
  buttonLabel:PropTypes.string.isRequired
}
Togglable.displayName = 'Togglable'
export default Togglable
