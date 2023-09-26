module.exports = {
  authLogin: (req, res) => {
    const { email, password } = req.body

    res.json({ msg: "login" })
  },

  authRegister: (req, res) => {
    const { name, email, password } = req.body

    res.json({ msg: "register" })
  },
}
