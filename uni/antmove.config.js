module.exports = {
  "env": "prod",
  "component2": true,
  "scope": true,
  "type": "wx2my",
  "fromId": 1100,
  "isReport": true,
  "input": "./",
  "output": "hh/wanzi",
  "hooks": {
    "appJson": function plugin(appJson) {
      return appJson;
    }
  },
  "babel": {
    "plugins": function () {
      return [];
    }
  },
  "plugins": []
};