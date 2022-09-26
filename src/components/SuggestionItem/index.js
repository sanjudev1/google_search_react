// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onArrowEvent} = props
  const {suggestion} = suggestionItem

  const arrowEvent = () => {
    onArrowEvent(suggestion)
  }

  return (
    <li className="flex">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={arrowEvent}
      />
    </li>
  )
}
export default SuggestionItem
