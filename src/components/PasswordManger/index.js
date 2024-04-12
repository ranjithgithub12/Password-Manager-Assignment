import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import PasswordList from '../PasswordList'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const emptyPassword = [
  {
    id: uuidv4(),
    website: 'youtube.com',
    userName: 'Ranjith',
    passWord: '123',
    backgroundCommentColor:
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ],
  },
]

class PasswordManger extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    passWord: '',
    searchInput: '',
    showPassword: false,
  }

  onSubmitPassword = event => {
    event.preventDefault()

    const {website, userName, passWord} = this.state

    const newListOfPassword = {
      id: uuidv4(),
      website,
      userName,
      passWord,
      backgroundCommentColor:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newListOfPassword],
      website: '',
      userName: '',
      passWord: '',
    }))
  }

  onDeleteUserPassword = id => {
    const {passwordList} = this.state
    const filterDeletedUser = passwordList.filter(
      eachList => eachList.id !== id,
    )
    this.setState({passwordList: filterDeletedUser})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passWord: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      passwordList,
      website,
      userName,
      passWord,
      showPassword,
      searchInput,
      onDeleteUserPassword,
    } = this.state

    const filterTheSearchInput = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const totalNumberOfPassword = filterTheSearchInput.length

    return (
      <div className="app-container">
        <div className="app1-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-image"
          />

          <div className="add-new-password-container">
            <div className="password-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                className="small-image"
                alt="password manager"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="large-image"
                alt=" password manager"
              />
            </div>
            <div className="add-new-passwords">
              <h1 className="heading">Add New Password</h1>
              <form className="form-container" onSubmit={this.onSubmitPassword}>
                <div className="input-containers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-images"
                  />
                  <hr className="horizontal-line" />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    value={website}
                    className="input-content"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-containers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-images"
                  />
                  <hr className="horizontal-line" />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={userName}
                    className="input-content"
                    onChange={this.onChangeUserName}
                  />
                </div>
                <div className="input-containers">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-images"
                  />
                  <hr className="horizontal-line" />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={passWord}
                    className="input-content"
                    onChange={this.onChangePassword}
                  />
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
          </div>

          <div className="password-list-container">
            <div className="password-search-container">
              <div className="your-password-container">
                <h1 className="your-password-heading">Your Passwords</h1>
                <p className="your-password-count">{totalNumberOfPassword}</p>
              </div>
              <div className="your-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="your-search-image"
                />
                <hr className="your-search-line" />
                <input
                  type="search"
                  placeholder="Search"
                  className="your-search-input"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr />
            <div className="list-of-container-password">
              <div className="show-password-container">
                <input
                  className="checkbox-box"
                  type="checkbox"
                  id="checkbox-id"
                  onClick={this.onClickShowPassword}
                />
                <label htmlFor="checkbox-id" className="label-text">
                  Show Passwords
                </label>
              </div>
              {totalNumberOfPassword > 0 ? (
                <ul className="unorder-list-passWord">
                  {filterTheSearchInput.map(eachList => (
                    <PasswordList
                      passwordList={eachList}
                      key={eachList.id}
                      showPassword={showPassword}
                      onDeleteUserPassword={this.onDeleteUserPassword}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-passWord-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    className="no-password-image"
                    alt="no passwords"
                  />
                  <p className="no-password-content">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManger
