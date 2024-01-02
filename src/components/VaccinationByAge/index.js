import {
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const colors = ['#8884d8', '#82ca9d', '#ffc658']

const VaccinationByAge = props => {
  const {vaccinatedByAge} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={vaccinatedByAge}
          dataKey="count"
          nameKey="age"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
          fill={(entry, index) => colors[index % colors.length]}
        >
          <Cell nameKey="age" fill="#2d87bb" />
          <Cell nameKey="age" fill="#a3df9f" />
          <Cell nameKey="age" fill="#64c2a6" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
