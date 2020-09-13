window.harness_event.on('Lead', function (params) {
  console.log('harness_event', 'Lead', params)
})

window.harness_event.on('InitiateCheckout', function (params) {
  console.log('harness_event', 'InitiateCheckout', params)
})

window.harness_event.on('CompleteRegistration', function (params) {
  console.log('harness_event', 'CompleteRegistration', params)
})
