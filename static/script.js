
console.log("Script hit!");

function testBackendCall() {
  console.log("Starting function testBackendCall()")
  const url = '/analyze';
  const data = { 'selection': "a" }
  axios.post(url, data)
    .then(function (response) {
      console.log("request response:\n", response);
    })
    .catch(function (error) {
      console.error("request error:\n", error);
    });

}

testBackendCall();