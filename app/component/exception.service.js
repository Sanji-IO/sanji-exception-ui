const $inject = ['$q', 'logger'];
class ExceptionService {
  constructor(...injects) {
    ExceptionService.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  catcher(message) {
    let $q = this.$q;
    let logger = this.logger;

    return function(e) {
      let thrownDescription;
      let newMessage;
      if (e.data && e.data.description) {
        thrownDescription = '\n' + e.data.description;
        newMessage = message + thrownDescription;
      }
      e.data.description = newMessage;
      logger.error(newMessage);
      return $q.reject(e);
    };
  }
}

ExceptionService.$inject = $inject;

export default ExceptionService;
