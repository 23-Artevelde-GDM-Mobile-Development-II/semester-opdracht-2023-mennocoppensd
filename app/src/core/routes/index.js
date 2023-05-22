const AuthRoutes = {
    Login: '/login',
    Register: '/register'
  };
  
  const BasicRoutes = { 
    Index: '/', 
    NotFound: '/404'
    };
    
    const EstateRoutes = {
      Search: '/search',
      Detail: '/search/:id',
    
    };
    
  const AgentRoutes = {
    Dashboard: '/estate/dashboard',
    SettingsHouse: '/estate/search/:id',
    AddHouse: '/estate/add',
    SettingsProfile: '/estate/settings'
  };
  const AdminRoutes = {
    Dashboard: '/admin/dashboard',
    HouseOverview: '/admin/immo/overview',
    AddClient: '/admin/dashboard/add',
    SettingsClient: '/admin/dashboard/client/:id',
    AddHouse: '/admin/immo/add',
    SettingsHouse: '/admin/immo/:id'
  };
  // replaces : values with values from object
  // e.g. route('/projects/:id', { id : 9 }) -> /projects/9
  export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
      path = path.replace(`:${key}`, options[key]);
    });
    return path;
  };
  
  export {
    AuthRoutes, BasicRoutes, AgentRoutes, AdminRoutes, EstateRoutes
  };
  