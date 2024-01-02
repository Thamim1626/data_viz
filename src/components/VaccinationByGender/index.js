import {
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinatedByGender} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={vaccinatedByGender}
          dataKey="count"
          nameKey="gender"
          cx="50%"
          cy="50%"
          outerRadius={80}
          startAngle={180}
          endAngle={0}
          label
        >
          <Cell nameKey="age" fill="#2d87bb" />
          <Cell nameKey="age" fill="#f54394" />
          <Cell nameKey="age" fill="#2cc6c6" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
