json2yaml
=========
Converts json or simple javascript objects into a yaml format.

Installation
------------

Include json2yaml.js (in src directory) via script tag and then run:

    var obj  = { hello: 'world', hello2: [ 'hello', 'world' ] };
    var yaml = json2yaml(obj);
    console.log(yaml);

This outputs

    hello: world
    hello2:
      - hello
      - world

Acknowledgement
---------------

For better special character escaping, we're using [yaml.js](https://github.com/jeremyfa/yaml.js)'s [Escaper](https://github.com/jeremyfa/yaml.js/blob/develop/lib/Escaper.js) and [Pattern](https://github.com/jeremyfa/yaml.js/blob/develop/lib/Pattern.js).

