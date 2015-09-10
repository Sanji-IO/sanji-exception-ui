export default ($provide) => {
  $provide.decorator('$exceptionHandler', extendExceptionHandler);
  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];

  /**
   * Extend the $exceptionHandler service to also display a toast.
   * @param  {Object} $delegate
   * @param  {Object} exceptionHandler
   * @param  {Object} logger
   * @return {Function} the decorated $exceptionHandler service
   */
  function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return function(exception, cause) {
      let appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      let errorData = {exception: exception, cause: cause};
      exception.message = appErrorPrefix + exception.message;
      $delegate(exception, cause);
      /**
       * Could add the error to a service's collection,
       * add errors to $rootScope, log errors to remote web server,
       * or log locally. Or throw hard. It is entirely up to you.
       * throw exception;
       *
       * @example
       *     throw { message: 'error message we added' };
       */
      logger.error(exception.message, errorData);
    };
  }
}
