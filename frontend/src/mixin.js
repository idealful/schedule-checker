import axios from 'axios';

export default {
  methods: {
    async $api(url, payload, method = 'get') {
      return (
        await axios({
          method,
          url,
          payload,
        })
          .catch((e) => {
            console.log(e, url, payload, method);
          })
          .finally(() => {
            console.log('$api :', url, payload, method);
          })
      ).data;
    },
    $baseUrl() {
      return 'http://localhost';
    },
  },
};