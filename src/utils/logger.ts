export const logger = {
  debug: (...args: any) => {
    if (__DEV__) {
      const textArg: string = args[0];
      console.log(`DEBUG ====> ${textArg}`);
      if (args[1]) {
        for (let arg of args) {
          if (arg !== textArg) {
            console.log('DEBUG DATA ====>', arg);
          }
        }
      }
    }
  },
};
