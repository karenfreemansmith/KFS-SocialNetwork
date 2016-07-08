var views = require("./views.js");
var html='"Content-Type": "text/html"';


function ads(request, response) {
  if(request.url === "/ads") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("ads", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function blog(request, response) {
  if(request.url === "/blog") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("blog", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function events(request, response) {
  if(request.url === "/events") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("events", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function favorites(request, response) {
  if(request.url === "/favorites") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("favorites", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function flags(request, response) {
  if(request.url === "/flags") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("flags", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function followers(request, response) {
  if(request.url === "/followers") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("followers", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function forums(request, response) {
  if(request.url === "/forums") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("forums", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function friends(request, response) {
  if(request.url === "/friends") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("friends", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function groups(request, response) {
  if(request.url === "/groups") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("groups", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function index(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("index", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function organizations(request, response) {
  if(request.url === "/organizations") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("organizations", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function pages(request, response) {
  if(request.url === "/pages") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("pages", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function places(request, response) {
  if(request.url === "/places") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("places", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function profile(request, response) {
  if(request.url === "/profile") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("profile", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function reports(request, response) {
  if(request.url === "/reports") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("reports", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function settings(request, response) {
  if(request.url === "/settings") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("settings", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function status(request, response) {
  if(request.url === "/status") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("status", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function tags(request, response) {
  if(request.url === "/tags") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("tags", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function users(request, response) {
  if(request.url === "/users") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("users", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

module.exports.ads = ads;
module.exports.blog = blog;
module.exports.events = events;
module.exports.favorites = favorites;
module.exports.flags = flags;
module.exports.followers = followers;
module.exports.forums = forums;
module.exports.friends = friends;
module.exports.groups = groups;
module.exports.index = index;
module.exports.organizations = organizations;
module.exports.pages = pages;
module.exports.places = places;
module.exports.profile = profile;
module.exports.reports = reports;
module.exports.settings = settings;
module.exports.status = status;
module.exports.tags = tags;
module.exports.users = users;
