const getGoals = (req,res) => {
    res.status(200).json({ message : 'Get Goals Test'})
}

module.exports = {getGoals}