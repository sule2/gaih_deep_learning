import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email('Geçerli bir email giriniz.').required('Email boş bırakılamaz.'),
    password: yup.string().min(5,'Şifreniz en az beş karakterli olmalıdır.').required('Şifre boş bırakılamaz'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Şifreler uyuşmamaktadır.').required('Doldurulması zorunludur.')
});

export default validations;
