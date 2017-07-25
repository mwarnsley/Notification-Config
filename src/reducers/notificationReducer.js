import initialState from './initialState';

// Creating the Notification Reducer
export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NOTIFICATIONS":
      const notificationList = action.payload;
      return {
        ...state,
        notifications: notificationList
      };
    break;
    case "SAVE_NOTIFICATION":
      const profile = action.payload;
      return {
        ...state,
        notifications: [
          ...state.notifications,
          profile
        ]
      };
    break;
    case "UPDATE_NOTIFICATION":
      const updated = action.payload;
      const updatedNotifications = state.notifications.map((notification) => {
        if (notification._id === updated._id) {
          return {
            ...updated
          };
        }
        return notification;
      });
      return {
        ...state,
        notifications: updatedNotifications
      };
    break;
    case "DELETE_NOTIFICATION":
      const deleted = action.payload;
      const notifications = state.notifications.filter((notification) => {
        return deleted !== notification._id;
      });
      return {
        ...state,
        notifications: notifications
      };
    break;
  };
  return state;
};
