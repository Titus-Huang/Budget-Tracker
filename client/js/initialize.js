const state = {
  userTransactions: [],
  loggedInUserEmail: 'a@gmail'
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
