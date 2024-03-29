const { Router } = require("express")
const route = new Router()

route.get("/login", (req, res) => {
  res.render("login")
})

route.get("/register", (req, res) => {
  res.render("register")
})

route.get("/products", (req, res) => {
  res.render("products")
})

route.get("/cart", (req, res) => {
  res.render("cart")
})

route.get("/profile", (req, res) => {
  const { firstname, lastname, mail, age, role } = req.session.passport.user
  res.render("current", { firstname, lastname, mail, age, role })
})

module.exports = route;
