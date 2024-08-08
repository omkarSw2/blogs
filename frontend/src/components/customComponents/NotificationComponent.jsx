import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell, CircleXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotificationComponent({
  notificationStatus = false,
  title,
  message,
  duration = 50000,
  type = "primary",
  onClose = null,
}) {
  const [notification, setNotification] = React.useState(notificationStatus);
  React.useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [notification, duration, onClose]);

  if (!notification) return null;
  return (
    <Alert
      role="alert"
      variant={type}
      aria-live="assertive"
      className={` flex justify-between z-50 fixed top-0 left-1/2 transform -translate-x-1/2 mt-4`}>
      <div className=" grid grid-cols-2 place-items-center">
        <Bell className={`h-4 w-4 `} />
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </div>
      </div>
      <Button variant="ghost" onClick={() => setNotification(false)}>
        <CircleXIcon />
      </Button>
    </Alert>
  );
}

NotificationComponent.propTypes = {
  notificationStatus: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  type: PropTypes.oneOf(["info", "success", "warning", "destructive"]),
  onClose: PropTypes.func,
};

export default NotificationComponent;
