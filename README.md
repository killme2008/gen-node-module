#Introduction
  [gen-node-module](https://github.com/killme2008/gen-node-module) is a script to generate a [node.js](http://www.nodejs.org) module skeleton.It's written in node.js.

#Useage

  Type command to generate a node.js module skeleton:

       ./gen.sh module_name [targetPath]

  module_name is the name of your node.js module and targetPath is the module project's parent path.Then gen-node-module will generate a skeleton for you,just like:

      module_name
            package.json
            lib
                module_name.js
            test
                module_name_test.js

  And adds some declarations to sources for you.
