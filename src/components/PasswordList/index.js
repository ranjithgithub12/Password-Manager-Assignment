import './index.css'

const PasswordList = props => {
  const {passwordList, showPassword, onDeleteUserPassword} = props
  const {id, website, userName, passWord, backgroundCommentColor} = passwordList

  const inital = userName.slice(0, 1)
  const onClickDelete = () => {
    onDeleteUserPassword(id)
  }
  return (
    <li className="list-of-cerated-passWord">
      <div className="list-of-user-details">
        <p className={`inital ${backgroundCommentColor}`}>{inital}</p>
        <div className="list-user-password">
          <p>{website}</p>
          <p>{userName}</p>
          {showPassword ? (
            <p>{passWord}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars-image"
              alt="stars"
            />
          )}
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickDelete}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordList
