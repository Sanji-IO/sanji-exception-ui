const $inject = [];
class ExceptionHandlerProvider {
  constructor(...injects) {
    ExceptionHandlerProvider.$inject.forEach((item, index) => this[item] = injects[index]);

    this.config = {
      appErrorPrefix: undefined
    };

    this.configure = appErrorPrefix => {
      this.config.appErrorPrefix = appErrorPrefix;
    };
  }

  $get() {
    let config = this.config;

    return {
      config: config
    };
  }
}

ExceptionHandlerProvider.$inject = $inject;
export default ExceptionHandlerProvider;
