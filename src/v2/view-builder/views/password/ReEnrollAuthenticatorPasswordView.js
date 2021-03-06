import { loc } from 'okta';
import EnrollAuthenticatorPasswordView from './EnrollAuthenticatorPasswordView';

const Body = EnrollAuthenticatorPasswordView.prototype.Body.extend({

  className: 'password-authenticator',

  title () {
    const title = this.options.settings.get('brandName')?
      loc('password.expired.title.specific', 'login', [this.options.settings.get('brandName')]):
      loc('password.expired.title.generic', 'login');
    return title;
  },

  save () {
    return loc('password.expired.submit', 'login');
  },

  getPasswordPolicySettings () {
    return this.options.appState.get('recoveryAuthenticator').settings;
  },

});

export default EnrollAuthenticatorPasswordView.extend({ Body });
