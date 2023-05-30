const AuthRoutes = {
    Login: '/login',
    Register: '/register'
  };
  
  const BasicRoutes = { 
    Index: '/', 
    NotFound: '/*',
    Favorites: '/favorites',

    };
    
    const EstateRoutes = {
      Search: '/search',
      PropertiesOverview: '/properties',
      PropertiesDetail: '/properties/:id/*',
      AddProperty: '/properties/add',
    };

  const AdminRoutes = {
    // CRUD Users
    dashboard: '/admin/*',  
    UsersOverview: '/users',
    UsersDetail: '/users/:id/*',
    AddUser: '/users/add',

    // CRUD Estate Offices
    EstateOfficesOverview: '/estate-offices',
    EstateOfficesDetail: '/estate-offices/:id/*',
    AddEstateOffice: '/estate-offices/add',

    // CRUD Categories
    CategoriesOverview: '/categories',
    CategoriesDetail: '/categories/:id/*',
    AddCategory: '/categories/add',

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
    AuthRoutes, BasicRoutes, AdminRoutes, EstateRoutes
  };
  