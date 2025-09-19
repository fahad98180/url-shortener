// import { Value } from "@radix-ui/themes/components/data-list";
import {z} from "zod";
// z.object({key:Value})
export const registerSchema =z.object({
    email :z.string().min(1,'email is require')
    .email('invalid Email formate'),

    password:z.string().min(8,'password must be >=8').max(25,'password must be <=25'),
    name:z.string().min(2,'name must be >= 2').max(25,'name max Allows charecter are 25')
    .trim()
})