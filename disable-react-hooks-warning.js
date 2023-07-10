const originalConsoleError = console.error

console.error = (...args) => {
  if (/Warning: React has detected a change in the order of Hooks called by.+However, this can lead to subtle bugs in your application.+/.test(args[0])) {
    return
  }

  originalConsoleError.call(console, ...args)
}
