const state = {
  userTransactions: [],
  loggedInUserEmail: null,
  currentDate: 2022-10-06
}

fetch('/api/sessions')
.then(res => res.json())
.then(email => {
  if (typeof email === 'string') {
    state.loggedInUserEmail = email
  }
})

if (typeof state.loggedInUserEmail === 'string') {
  let data = `{ "userEmail" : "${state.loggedInUserEmail}" }`

  fetch('/api/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
    .then(res => res.json())
    .then(transactions => {
      state.userTransactions = transactions
    })
}

function renderLandingPage() {
  document.querySelector('#page').innerHTML = `
  <section class='main-logo'> 
  <h1>BudgetTracker</h1>
  </section>
  <section class='options'>
    <button onclick="renderLogin()">Login</button>
    <button onclick="renderSignUp()">Sign Up</button>
  </section>
  `
}
