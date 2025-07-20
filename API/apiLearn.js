//API using xmhHttpRequest
/*
The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

Value	State	            Description
0	    UNSENT	            Client has been created. open() not called yet.
1	    OPENED	            open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	            Downloading; responseText holds partial data.
4	    DONE	            The operation is complete.
*/

let requestUrl = "https://api.github.com/users/KushagraShukla004";
let response;

// creating an XMLHttpRequest object using new keyword
let xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl); // 1 OPENED
// console.log("HERE");
//to check the state of the url request
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
  /* 
  2 (means HEADERS_RECIEVED)
  3 (means LOADING)
  4 (means DONE)
  */

  //now if we want the response of our url (which we will get after state 4 (DONE))
  if (xhr.readyState === 4) {
    //xhr gives a response by calling object called "response" or "responseText" inside XMLHttpRequest())
    //=============================================================================================================
    //xhr.response: (property) XMLHttpRequest.response: any , Returns the response body as sting.
    /*
    xhr.responseText: (property) XMLHttpRequest.responseText: string
    Returns response as text.
    Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
    */
    //===============================================================================================================
    /*
    Use responseText if you're expecting plain text and not setting responseType.
    Use response if you're working with JSON, blobs, binary data, or want more control.
    */
    //===================================================================================================================
    response = JSON.parse(xhr.response); //as string hence needs to be converted in JSON
    console.log("response inside readyState:", response); // response came perfectly
    console.log("response.login:", response.followers);
  }
};
//the send it
xhr.send();

//BUT!!!!! this will always be undefined due to ASYNCHRONOUS nature of xhr!!!
//JS didnt wait for xhr request to be completed and already executed this console.log.
//since request was never executed the response never came and hence, response is undefined
// console.log("response outside:", response); //undefined
