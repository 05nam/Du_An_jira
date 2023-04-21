import { useFormik } from "formik";
import * as Yup from "yup";
import { history } from "../../App";
import { signUp } from "../../services/services";
import { signIn } from "../../services/services";
import { loginAction } from "../../redux/action/loginAction";



//?Register
export const useRelusFormik_register = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email không được để trống"),
            passWord: Yup.string().required("Password không được để trống"),
            name: Yup.string().required("Name không được để trống"),
            phoneNumber: Yup.string().required("Phone không được để trống"),
        }),
        onSubmit: (values) => {
            let register = signUp(values);
            register
                .then((result) => {
                    alert(result.data.message);
                    history.push("/login");
                    history.go(0);
                    console.log('dang nhap>>>>>', result)
                })
                .catch((error) => {
                    alert(error.response.data.message);
                });
        },
    });
    return formik;
};


//? Login
export const useRelusFormik_login = (dispatch) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            passWord: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email không được để trống"),
            passWord: Yup.string().required("Password không được để trống"),
        }),
        onSubmit: (values) => {
            let register = signIn(values);
            register
                .then((result) => {
                    let action = loginAction(result.data.content);
                    dispatch(action);
                    history.push("/home");
                    history.go(0);
                })
                .catch((error) => {
                    alert(error.response.data.message);
                });
        },
    });
    return formik
};
