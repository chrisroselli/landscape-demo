import { extend } from "vee-validate";
import { required, email, alpha } from "vee-validate/dist/rules";
extend("required", required);
extend("email", email);
extend("alpha", alpha);
