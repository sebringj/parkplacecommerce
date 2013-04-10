# Park Place Commerce
open source eCommerce B2B and B2C built with node.js, redis and mongodb
## Overview
Park Place Commerce is built from the ground up for simplicity, flexibility, and modularity. 

The problem with typical open source eCommerce systems is they grow very large and become intimidating to develop with over time. Also, open source projects can be limiting ifWe aim to avoid this by breaking up the solution into smaller websites that are separated by purpose. For example, the stand-alone API website is at the heart of Park Place Commerce. All other parts of Park Place Commerce consume the API.

## Websites that comprise the Solution
  1. **api** : This contains the data model and security logic without any visual interface.
  2. **admin** : This centrally controls all access and instances.
  3. **manager** : A multi-tenant business management portal.
  4. **b2b** : An eCommerce website for business-to-business ordering.
  5. **b2c** : An eCommerce website for consumers.

Park Place Commerce is designed to be an API first to accommodate any platform that is able to consume it.

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
