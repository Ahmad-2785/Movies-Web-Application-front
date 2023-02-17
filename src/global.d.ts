// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { StringSchema } from "yup";

declare module 'yup' {
  class StringSchema {
    firstLetterUppercase(): this;
  }
}
