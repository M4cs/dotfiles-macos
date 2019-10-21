const { map, floor, ceil } = require('lodash/fp')

module.exports = {
    interpolateArray (fit) {
        return (data) => {

            const linearInterpolate = before => after => atPoint =>
                before + (after - before) * atPoint

            const springFactor = (data.length - 1) / (fit - 1)

            const interp = index => {
                const spring = index * springFactor
                const before = floor(spring)
                const after = ceil(spring)
                const atPoint = spring - floor(spring)
                return linearInterpolate(data[before])(data[after])(atPoint)
            }

            return map.convert({'cap':0})((_, i) => interp(i))(Array(fit))
        }
    }
}
