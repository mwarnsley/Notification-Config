import axios from 'axios';

// Action to return all of the notifications from the database
export function getNotifications() {
  return (dispatch) => {
    axios.get('/notifications')
      .then((res) => {
        dispatch({
          type: "GET_NOTIFICATIONS",
          payload: res.data
        });
      }).catch((err) => {
        dispatch({
          type: "GET_NOTIFICATONS_REJECTED",
          payload: "There was an error retreiving the notifications"
        });
      });
  };
}

// Action to save the new notification profile that was created
export function saveNotificationProfile(profile) {
  return (dispatch) => {
    axios.post('/notifications', profile)
      .then((response) => {
        dispatch({
          type: "SAVE_NOTIFICATION",
          payload: response.data
        });
      }).catch((err) => {
        dispatch({
          type: "SAVE_NOTIFICATION_REJECTED",
          payload: "There was an error saving your notification"
        });
      });
  };
}

// Action to delete the notification from the manage screen
export function deleteNotification(id) {
  return (dispatch) => {
    axios.delete(`/notifications/${id}`)
      .then((response) => {
        dispatch({
          type: "DELETE_NOTIFICATION",
          payload: id
        });
      }).catch((err) => {
        dispatch({
          type: "DELETE_NOTIFICATION_REJECTED",
          payload: "There was an error deleting your notification"
        });
      });
  };
}
