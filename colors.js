const colors = {
    primary: (opacity = 1) => `rgba(255, 107, 53, ${opacity})`,
    secondary: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,
    accent: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
    grey: (opacity = 1) => `rgba(149, 165, 166, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
}
export default colors
