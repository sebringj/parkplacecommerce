# Park Place Commerce
open source eCommerce B2B and B2C built with node.js, redis and mongodb
## Overview
Park Place Commerce is designed to be an API first to accommodate any platform that is able to consume it. 

The problem with most open source eCommerce systems is they grow very large over time and become intimidating to manage. Also, eCommerce systems shouldn't lock you down to a server-side technology or branding scheme. We aim to avoid these issues by breaking up the solution into web apps or websites separated by concern while making the API a first class citizen to allow for any type of consuming app or platform. This is a project where its encourage to swap out parts of the solution with your desired technology, especially in the B2C area. The exception being the API as its at the core of Park Place Commerce.

## The Solution
  1. **api** v0.0 : REST API website that is the gatekeeper of all business logic, data and security.
  2. **jsapi** v0.0 : A client-side JavaScript library to enable simple setup of external B2C or B2B websites
  3. **admin** v0.0 : Stand alone web app that centrally controls API access.
  4. **manager** v0.0 : A multi-tenant web app management portal.
  5. **b2b** v0.0 : An eCommerce web app for business-to-business ordering.
  6. **b2c** v.0.0 : An eCommerce website for consumers.

## License
You may use Park Place Commerce under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

Copyright 2013 Emerald Code and other contributors
http://www.emeraldcode.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
