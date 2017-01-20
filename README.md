Simple (and basic) React Example
========

This is NOT a boilerplate. It is nothing more than a small and silly demo of
some concepts, discussed in the talk "React - Putting it all together",
presented on january 30th of 2017 for HTML5mtl, by Guyllaume Cardinal.

# Running the project

All that is interesting here is the code, but if you do feel the need to run
the project, you can do so easily if you have Docker installed:

```
make && make dev
// Project will run at localhost:50000
```

If you don't have Docker

```
yarn install && ./node_modules/.bin/gulp webpack:server
// Project will run at localhost:3000
```