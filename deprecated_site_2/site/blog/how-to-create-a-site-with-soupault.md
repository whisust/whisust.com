# How to setup and create a website with Soupault

## This is a subtitle

This website is generated using [Soupault](https://soupault.app).

## How to do it easily

### Soupault init

- `soupault init` stuff
- then update your hosts file to point to a local version of your site:

```
127.0.0.1 whisust-dev.com
```

- Install something like nginx or apache locally and serve localhost on your soupault build folder, I did apache on this
  server and and yeah This will help you with relative links
- `soupault build` should run
- you should be able to access your site locally
