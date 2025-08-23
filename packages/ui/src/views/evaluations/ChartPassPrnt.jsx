import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import PropTypes from 'prop-types'

// success, failure, error
const COLORS = ['#2ecc71', '#e74c3c', '#f39c12']
const RADIAN = Math.PI / 180

 => {
     * 0.35
    
    

    return (
        <text x={x} y={y} fill='black' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central' fontSize='11'>
            {`${(pe.t}%`}
        </text>
    )
}

exp => {
    return (
        <ResponsiveContainer width='100%' height={200}>
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Pie cx='50%' cy='40%' labelLine={false} outerRadius={65} dataKey='value' data={data} label={renderCustomizedLabel}>
                    <Cell key={`cell-${0}`} fill={COLORS[0]} />
                    <Cell key={`cell-${1}`} fill={COLORS[1]} />
                    <Cell key={`cell-${2}`} fill={COLORS[2]} />
                </Pie>
                <Legend verticalAlign='bottom' height={36} />
            </PieChart>
        </ResponsiveContainer>
    )
}

ChartPassPrnt.propTypes = {
    data: PropTypes.array
}
