m.routes = function mRoutes( defaultRoute, routesMap ){
    var routes = {};

    for( var route in routesMap ){
        routes[ route ] = {
            controller : subRouter( routesMap[ route ] ),
            view       : noop
        };
    }

    return m.route( document.body, defaultRoute, routes );

    function subRouter( modules ){
        return function routeChange(){
            m.redraw.strategy( 'all' );

            for( var key in modules ){
                m.module( document.querySelector( key ), modules[ key ] );
            }
        };
    }

    function noop(){}
};

m.debounce = function mDebounce(fn, delay) {
  var timer = null;

  return function () {
    var context = this, args = arguments
    clearTimeout(timer)

    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}