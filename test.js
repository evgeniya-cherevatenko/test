console.log('testing events');
console.log(window.harness_event)

window.harness_event.on('Lead', function (params) {
  console.log('harness_event', 'Lead', params)
})
