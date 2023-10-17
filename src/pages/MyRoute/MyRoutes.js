import RouteContext from "./context/context";

export default function MyRoutes({children, location}) {
  const routes = routeMap(children)
  const ele = useRoutes(routes);
  console.log('routes: ', routes, 'ele', ele, location);
  const matchRoute = ele.find(item => item.path === location)
  return matchRoute.routeMap.reduceRight((outlet, el) => {
    return (
      <RouteContext.Provider value={{outlet}}>
        {el.element}
      </RouteContext.Provider>
      
    )
    // return createElement('div', {}, 'hhh')
  }, null)
}
// 将子组件的ReactElement都变成一个对象
function routeMap(children) {
  console.log('children', children)
  const routes = [];
  children.forEach(item => {
    const {path, element} = item.props;
    const route = {path: path, element: element};
    if (item.props.children) {
      route.children = routeMap(item.props.children);
    }
    routes.push(route)
  });
  return routes;
}
function useRoutes(routes) {
  const list = [];
  routes.forEach(item => {
    const route = {...item, routeMap: [item]};
    if(!item.children) {
      list.push(route)
    } else {
      list.push(childRoute(route, item.children))
    }
  });
  return list.flat();
}
function childRoute(parent, children) {
  let list = children.map(child => {
    const route = {
      path: parent.path + '/' + child.path,
      element: child.element,
    }
    route.routeMap = [...parent.routeMap, route]
  if (child.children) {
    route = childRoute(route, child.children)
  }
    return route
  })
  return list;
}