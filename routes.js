var views = require("./views.js");
var html='"Content-Type": "text/html"';


function pages(request, response) {
  response.writeHeader(200, {html});
  views.view("header", {stylesheet:"css/styles.css"}, response);
  if(request.url === "/ads") {
    views.view("ads", {}, response);
  } else if(request.url === "/blog") {
    views.view("blog", {}, response);
  } else if(request.url === "/events") {
    views.view("events", {}, response);
  } else if(request.url === "/favorites") {
    views.view("favorites", {}, response);
  } else if(request.url === "/flags") {
    views.view("flags", {}, response);
  } else if(request.url === "/followers") {
    views.view("followers", {}, response);
  } else if(request.url === "/forums") {
    views.view("forums", {}, response);
  } else if(request.url === "/friends") {
    views.view("friends", {}, response);
  } else if(request.url === "/groups") {
    views.view("groups", {}, response);
  } else if(request.url === "/") {
    views.view("index", {}, response);
  } else if(request.url === "/organizations") {
    views.view("organizations", {}, response);
  } else if(request.url === "/pages") {
    views.view("pages", {}, response);
  } else   if(request.url === "/places") {
    views.view("places", {}, response);
  } else if(request.url === "/profile") {
    views.view("profile", {}, response);
  } else if(request.url === "/reports") {
    views.view("reports", {}, response);
  } else if(request.url === "/settings") {
    views.view("settings", {}, response);
  } else if(request.url === "/status") {
    views.view("status", {}, response);
  } else   if(request.url === "/tags") {
    views.view("tags", {}, response);
  } else if(request.url === "/users") {
    views.view("users", {}, response);
  } else {
    views.view("404", {}, response);
  }
    views.view("footer", {}, response);
    response.end();
}

module.exports.pages = pages;
