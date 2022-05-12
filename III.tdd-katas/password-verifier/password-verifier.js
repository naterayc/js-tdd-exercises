const upperChar = new RegExp('[A-Z]');
const lowerChar = new RegExp('[a-z]');
const digitChar = new RegExp('[0-9]');

class PasswordVerifier {
    constructor(password) {
        this.password = password;
        this.errors = [];
    }

    checkLength(length) {
        if (this.password.length < length) this.errors.push('Password should be larger than 8 chars');
        return this.errors;
    }

    checkContent() {
        if (this.password === null) throw new Error('Password should not be null');
        this.checkUppercase();
        return this.errors;
    }

    checkUppercase() {
        if (!upperChar.test(this.password)) this.errors.push('Password should have one uppercase letter at least');
        return this.errors;
    }

    checkLowercase() {
        if (!lowerChar.test(this.password)) throw new Error('Password should have one lowercase letter at least');
    }

    checkNumbers() {
        if (!digitChar.test(this.password)) this.errors.push("Password should have one number at least");
        return this.errors;
    }

    Verify() {
       // let checks = 0;

        try {
            /* try {
                this.checkContent();
                checks++
                this.checkLowercase();
                checks++
            }
            catch (error) {
                throw error;
            }
            try {
                this.checkLength(8);
                checks++
            } catch (error) {
                this.errors.push(error.message);
            }
            try {
                this.checkNumbers();
                checks++
            } catch (error) {
                this.errors.push(error.message);
            }
            if (checks >= 3) {
                return "Password is ok";
            } else {
                return this.errors
            } */
            this.checkContent();
            this.checkLowercase();
            this.checkLength(8);
            this.checkNumbers();
            if(this.errors.length > 1){
                return this.errors;
            } else {
                return "Password is ok";
            }
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = { PasswordVerifier };