const data = {
  "status": 200,
  "responseType": "json",
  "response": {
    "stateHandle": "01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB",
    "version": "1.0.0",
    "expiresAt": "2019-07-24T21:25:33.000Z",
    "step": "PROFILE_REQUIRED",
    "intent": "LOGIN",
    "remediation": {
      "type": "array",
      "value": [
        {
          "rel": [
            "create-form"
          ],
          "name": "enroll-profile",
          "href": "http://localhost:3000/api/v1/idx/enroll",
          "method": "POST",
          "accepts": "application/vnd.okta.v1+json",
          "value": [
            {
              "name": "userProfile",
              "form": {
                "value": [
                  {
                    "name": "lastName",
                    "label": "Last name",
                    "required": true
                  },
                  {
                    "name": "firstName",
                    "label": "First name",
                    "required": true
                  },
                  {
                    "name": "email",
                    "label": "Primary email",
                    "required": true
                  }
                ]
              }
            },
            {
              "name": "stateHandle",
              "value": "01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82",
              "visible": false
            }
          ]
        },
        {
          "rel": [
            "create-form"
          ],
          "name": "select-identify",
          "href": "http://localhost:3000/api/v1/idx",
          "method": "POST",
          "accepts": "application/vnd.okta.v1+json",
          "value": [
            {
              "name": "identifier",
              "label": "identifier"
            },
            {
              "name": "stateHandle",
              "value": "01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB",
              "visible": false
            }
          ]
        }
      ]
    },
    "cancel": {
      "rel": [
        "create-form"
      ],
      "name": "cancel",
      "href": "http://localhost:3000/api/v1/idx/cancel",
      "method": "POST",
      "value": [
        {
          "name": "stateHandle",
          "value": "01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB",
          "visible": false
        }
      ]
    },
    "context": {
      "rel": [
        "create-form"
      ],
      "name": "context",
      "href": "http://localhost:3000/api/v1/idx/context",
      "method": "POST",
      "accepts": "application/vnd.okta.v1+json",
      "value": [
        {
          "name": "stateHandle",
          "value": "01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB",
          "visible": false
        }
      ]
    }
  }
};

module.exports = data;
