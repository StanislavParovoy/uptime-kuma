const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class Whapi extends NotificationProvider {

    name = "whapi";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {

        let okMsg = "Sent Successfully.";

        try {

            const config = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + notification.whapiAuthToken,
                }
            };

            let data = {
                "to": notification.whapiRecipient,
                "body": msg,
            };

            let url = notification.whapiApiUrl + "/messages/text";

            await axios.post(url, data, config);

            return okMsg;
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }

}

module.exports = Whapi;
