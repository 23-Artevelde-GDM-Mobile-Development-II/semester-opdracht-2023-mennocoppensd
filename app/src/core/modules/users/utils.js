import { roles } from './constants';

const formatName = (user) => {
  return `${user.username}`;
};


const isUser = (user) => {
  return user.role === roles.User;
};

const isEstateOffice = (user) => {
  return user.role === roles.EstateOffice;
};

const isAdmin = (user) => {
  return user.role === roles.Admin;
};
export {
  isUser, isEstateOffice, isAdmin, formatName
};
