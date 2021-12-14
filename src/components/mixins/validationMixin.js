const validationMixin = {
    data: () => ({
        validationRules: {
            name: {
                rules: [
                    value => !!value || 'Потрібно вказати логін!',
                    value => (value.length >= 3) || 'Логін повинен бути довжиною 3 символи або більше'
                ]
            },
            password: {
                rules: [
                    value => !!value || 'Потрібно вказати пароль!',
                    value => (value.length >= 5) || 'Пароль повинен бути довжиною 5 символів або більше'
                ]
            }
        }
    }),
    methods: {
        validateField(inputName, value) {
            return this.validationRules[inputName].rules
                .filter(rule => {
                    const isValid = rule(value)
    
                    if(isValid !== true) {
                        return isValid
                    }
                })
                .map(rule => rule(value))
        },
        validateForm(form) {
            const formErrors = {}
            let formIsValid = true

            for(let property in form) {
                const errors = this.validateField(property, form[property])

                if (errors.length) {
                    formIsValid = false;
                }
                
                formErrors[property] = errors

                formErrors.formIsValid = formIsValid
                
            }

            return formErrors
        }
    },
}
  
  export default validationMixin;