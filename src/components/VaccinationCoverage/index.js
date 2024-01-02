import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {lastSevenDaysCaseChange} = props

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={lastSevenDaysCaseChange}
        margin={{top: 20, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="vaccineDate" tick={{fill: 'red'}} />
        <YAxis tick={{fill: 'green'}} />
        <Tooltip contentStyle={{color: 'blue', backgroundColor: 'lightgray'}} />

        <Legend wrapperStyle={{color: 'purple'}} />

        <Tooltip />
        <Legend />
        <Bar dataKey="doseOne" name="dose 1" fill="#f54394" />
        <Bar dataKey="doseTwo" name="dose 2" fill="#5a8dee" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
