const state = {
  userTransactions: [],
  loggedInUserEmail: null
}

fetch('/api/sessions')
.then(res => res.json())
.then(email => {
  if (typeof email === 'string') {
    state.loggedInUserEmail = email
  }
})

if (typeof state.loggedInUserEmail === 'string') {
  // fetch('/api/transactions')
  //   .then(res => res.json())
  //   .then(transactions => {
  //     state.userTransactions = transactions
  //   })
}

