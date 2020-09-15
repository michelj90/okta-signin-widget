import Form from './Form';
const CLASS_SELECTOR = '.mfa-invalid-session';
export default Form.extend({
  isMfaInvalidSessionView: function () {
    return this.$(CLASS_SELECTOR).length === 1;
  },
});
