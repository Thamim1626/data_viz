import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiConstrings = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {isDisplay: apiConstrings.initial, apiDataList: []}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({isDisplay: apiConstrings.initial})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    const data = await response.json()
    const dataCaseChange = {
      lastSevenDays: data.last_7_days_vaccination,
      vaccinatedByAge: data.vaccination_by_age,
      vaccinatedByGender: data.vaccination_by_gender,
    }

    if (response.ok) {
      this.setState({
        apiDataList: dataCaseChange,
        isDisplay: apiConstrings.success,
      })
    } else {
      this.setState({isDisplay: apiConstrings.failure})
    }
  }

  renderInitial = () => {
    const {apiDataList} = this.state
    return (
      <div className="initial-section">
        <Loader
          type="Rings"
          data-testid="loader"
          color="#2cc6c6"
          height={100}
          width={100}
        />
      </div>
    )
  }

  renderSuccess = () => {
    const {apiDataList} = this.state
    const {lastSevenDays, vaccinatedByAge, vaccinatedByGender} = apiDataList

    const lastSevenDaysCaseChange = lastSevenDays.map(eachItem => ({
      doseOne: eachItem.dose_1,
      vaccineDate: eachItem.vaccine_date,
      doseTwo: eachItem.dose_2,
    }))

    return (
      <div className="success-view">
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        <div className="success-card">
          <h1 className="cart-heading">Vaccination Coverage</h1>
          <VaccinationCoverage
            lastSevenDaysCaseChange={lastSevenDaysCaseChange}
          />
        </div>
        <div className="success-card">
          <h1 className="cart-heading">Vaccination by gender</h1>
          <VaccinationByGender vaccinatedByGender={vaccinatedByGender} />
        </div>
        <div className="success-card">
          <h1 className="cart-heading">Vaccination by Age</h1>
          <VaccinationByAge vaccinatedByAge={vaccinatedByAge} />
        </div>
      </div>
    )
  }

  renderFailure = () => (
    <div className="failure-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="main-heading">Something went wrong</h1>
    </div>
  )

  renderSwitch = () => {
    const {isDisplay} = this.state
    switch (isDisplay) {
      case apiConstrings.initial:
        return this.renderInitial()

      case apiConstrings.success:
        return this.renderSuccess()

      default:
        return this.renderFailure()
    }
  }

  render() {
    const {apiDataList} = this.state
    return (
      <div className="cowin-main">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo-image"
          />
          <h1 className="logo-heading">co-WIN</h1>
        </div>
        {this.renderSwitch()}
      </div>
    )
  }
}

export default CowinDashboard
