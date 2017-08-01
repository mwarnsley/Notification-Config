import axios from 'axios';

// Action to return all of the notifications from the database
export function getNotifications() {
  return async (dispatch) => {
    try {
      const getNotifications = await axios.get('/notifications');
      dispatch({
        type: "GET_NOTIFICATIONS",
        payload: getNotifications.data
      });
    } catch(err) {
      dispatch({
        type: "GET_NOTIFICATIONS_REJECTED",
        payload: "There was an error getting the notifications"
      });
    }
  };
}

// Action to save the new notification profile that was created
export function saveNotificationProfile(profile) {
  return async (dispatch) => {
    try {
      const saveNoticationProfile = await axios.post('/notifications', profile);
      dispatch({
        type: "SAVE_NOTIFICATION",
        payload: saveNoticationProfile.data
      });
    } catch(err) {
      dispatch({
        type: "SAVE_NOTIFICATION_REJECTED",
        payload: "There was an error saving your notification"
      });
    }
  };
}

// Action to update the notification
export function updateNotification(id, profile) {
  return async (dispatch) => {
    try {
      const updateNotification = await axios.put(`/notifications/${id}`, profile);
      dispatch({
        type: "UPDATE_NOTIFICATION",
        payload: updateNotification.data
      });
    } catch(err) {
      dispatch({
        type: "UPDATE_NOTIFICATION_REJECTED",
        payload: "There was an error updating your notification"
      });
    }
  };
}

// Action to delete the notification from the manage screen
export function deleteNotification(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`/notifications/${id}`);
      dispatch({
        type: "DELETE_NOTIFICATION",
        payload: id
      });
    } catch(err) {
      dispatch({
        type: "DELETE_NOTIFICATION_REJECTED",
        payload: "There was an error deleting your notification"
      });
    }
  };
}
