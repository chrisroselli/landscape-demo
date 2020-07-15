import { extend } from "vee-validate";
import { required, email, alpha, alpha_spaces } from "vee-validate/dist/rules";
extend("required", required);
extend("email", email);
extend("alpha", alpha);
extend("alpha_spaces", alpha_spaces);
