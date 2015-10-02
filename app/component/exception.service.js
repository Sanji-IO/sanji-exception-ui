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
      if ('object' === typeof e && e.data && e.data.message) { // handling like http request error
        thrownDescription = '\n' + e.data.message;
        newMessage = message + thrownDescription;
        logger.error(newMessage, e);
        return $q.reject(e);
      }
      else {
        logger.error(message, e);
      }
    };
  }
}

ExceptionService.$inject = $inject;
export default ExceptionService;
