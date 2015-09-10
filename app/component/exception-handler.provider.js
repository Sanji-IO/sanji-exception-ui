export default function config() {
  this.config = {
    appErrorPrefix: undefined
  };

  this.configure = (appErrorPrefix) => {
    this.config.appErrorPrefix = appErrorPrefix;
  };

  this.$get = () => {
    return {config: this.config};
  };
}
