let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};


req.setRequestHeader("X-Master-Key", "$2b$10$Q0EK6m9jRYgJmxstdCyFCO9tdLur8aHXnaMu9TKx58rNYj16cNOeq");
 req.send();



export const baseUrl = req.open("GET", "https://api.jsonbin.io/b/60de5a7f55b7245a20d37692/latest/", true);
