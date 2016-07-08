var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.ads(request, response);
  route.blog(request, response);
  route.events(request, response);
  route.favorites(request, response);
  route.flags(request, response);
  route.followers(request, response);
  route.forums(request, response);
  route.friends(request, response);
  route.groups(request, response);
  route.index(request, response);
  route.organizations(request, response);
  route.pages(request, response);
  route.places(request, response);
  route.profile(request, response);
  route.reports(request, response);
  route.settings(request, response);
  route.status(request, response);
  route.tags(request, response);
  route.users(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
